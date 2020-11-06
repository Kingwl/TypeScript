/* @internal */
namespace ts.codefix {
    const fixName = "fixOverrideModifier";
    const fixAddOverrideId = "fixAddOverrideModifier";
    const fixRemoveOverrideId = "fixRemoveOverrideModifier";
    const fixConvertToPropertyDeclarationId = "fixConvertToPropertyDeclaration";

    type ClassElementHasJSDoc =
        | ConstructorDeclaration
        | PropertyDeclaration
        | MethodDeclaration
        | GetAccessorDeclaration
        | SetAccessorDeclaration;

    const errorCodes = [
        Diagnostics.This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0.code,
        Diagnostics.This_member_cannot_have_an_override_modifier_because_its_containing_class_0_does_not_extend_another_class.code,
        Diagnostics.This_member_cannot_have_an_override_modifier_because_it_is_implemented_an_abstract_method_that_declared_in_the_base_class_0.code,
        Diagnostics.This_member_must_have_an_override_modifier_because_it_overrides_a_member_in_the_base_class_0.code,
        Diagnostics.This_parameter_property_must_be_rewritten_as_a_property_declaration_with_an_override_modifier_because_it_overrides_a_member_in_base_class_0.code
    ];

    const errorCodeFixIdMap: Record<number, [message: DiagnosticMessage, fixId: string, fixAllMessage: DiagnosticMessage, allowInjs: boolean]> = {
        [Diagnostics.This_member_must_have_an_override_modifier_because_it_overrides_a_member_in_the_base_class_0.code]: [
            Diagnostics.Add_override_modifier, fixAddOverrideId, Diagnostics.Add_all_override_modifier, true
        ],
        [Diagnostics.This_member_cannot_have_an_override_modifier_because_its_containing_class_0_does_not_extend_another_class.code]: [
            Diagnostics.Remove_override_modifier, fixRemoveOverrideId, Diagnostics.Remove_all_override_modifier, true
        ],
        [Diagnostics.This_member_cannot_have_an_override_modifier_because_it_is_implemented_an_abstract_method_that_declared_in_the_base_class_0.code]: [
            Diagnostics.Remove_override_modifier, fixRemoveOverrideId, Diagnostics.Remove_all_override_modifier, true
        ],
        [Diagnostics.This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0.code]: [
            Diagnostics.Remove_override_modifier, fixRemoveOverrideId, Diagnostics.Remove_all_override_modifier, true
        ],
        [Diagnostics.This_parameter_property_must_be_rewritten_as_a_property_declaration_with_an_override_modifier_because_it_overrides_a_member_in_base_class_0.code]: [
            Diagnostics.Convert_to_property_declaration_and_add_override_modifier,
            fixConvertToPropertyDeclarationId,
            Diagnostics.Convert_all_to_property_declaration_and_add_override_modifier,
            false
        ]
    };

    registerCodeFix({
        errorCodes,
        getCodeActions: context => {
            const { errorCode, span, sourceFile } = context;

            const info = errorCodeFixIdMap[errorCode];
            if (!info) return emptyArray;

            const [ descriptions, fixId, fixAllDescriptions, allowInjs ] = info;
            if (!allowInjs && isSourceFileJS(sourceFile)) return emptyArray;
            const changes = textChanges.ChangeTracker.with(context, changes => dispatchChanges(changes, context, errorCode, span.start));

            return [
                createCodeFixActionMaybeFixAll(fixName, changes, descriptions, fixId, fixAllDescriptions)
            ];
        },
        fixIds: [fixName, fixAddOverrideId, fixRemoveOverrideId, fixConvertToPropertyDeclarationId],
        getAllCodeActions: context =>
            codeFixAll(context, errorCodes, (changes, diag) => {
                const { code, start, file } = diag;
                const info = errorCodeFixIdMap[code];
                if (!info || info[1] !== context.fixId || !info[3] && isSourceFileJS(file)) {
                    return;
                }

                dispatchChanges(changes, context, code, start);
            })
    });

    function dispatchChanges(
        changeTracker: textChanges.ChangeTracker,
        context: CodeFixContext | CodeFixAllContext,
        errorCode: number,
        pos: number) {
        switch (errorCode) {
            case Diagnostics.This_member_must_have_an_override_modifier_because_it_overrides_a_member_in_the_base_class_0.code:
                return doAddOverrideModifierChange(changeTracker, context.sourceFile, pos);
            case Diagnostics.This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0.code:
            case Diagnostics.This_member_cannot_have_an_override_modifier_because_its_containing_class_0_does_not_extend_another_class.code:
            case Diagnostics.This_member_cannot_have_an_override_modifier_because_it_is_implemented_an_abstract_method_that_declared_in_the_base_class_0.code:
                return doRemoveOverrideModifierChange(changeTracker, context.sourceFile, pos);
            case Diagnostics.This_parameter_property_must_be_rewritten_as_a_property_declaration_with_an_override_modifier_because_it_overrides_a_member_in_base_class_0.code:
                return doConvertToPropertyDeclaration(changeTracker, context.sourceFile, pos);
            default:
                Debug.fail("Unexpected error code: " + errorCode);
        }
    }

    function doAddOverrideModifierChange(changeTracker: textChanges.ChangeTracker, sourceFile: SourceFile, pos: number) {
        const classElement = findContainerClassElement(sourceFile, pos);
        if (isSourceFileJS(sourceFile)) {
            changeTracker.addJSDocTags(sourceFile, classElement, [ factory.createJSDocOverrideTag(/*tagName*/ undefined) ]);
        }
        else {
            changeTracker.insertModifierBefore(sourceFile, SyntaxKind.OverrideKeyword, classElement);
        }
    }

    function doRemoveOverrideModifierChange(changeTracker: textChanges.ChangeTracker, sourceFile: SourceFile, pos: number) {
        const classElement = findContainerClassElement(sourceFile, pos);
        if (isSourceFileJS(sourceFile)) {
            changeTracker.filterJSDocTags(sourceFile, classElement, not(isJSDocOverrideTag));
        }
        else {
            const overrideModifier = classElement.modifiers && find(classElement.modifiers, modifier => modifier.kind === SyntaxKind.OverrideKeyword);
            Debug.assertIsDefined(overrideModifier);
            changeTracker.deleteModifier(sourceFile, overrideModifier);
        }
    }

    function doConvertToPropertyDeclaration(changeTracker: textChanges.ChangeTracker, sourceFile: SourceFile, pos: number) {
        const info = getConvertParameterPropertyToPropertyInfo(sourceFile, pos);
        if (!info) {
            return;
        }

        getConvertParameterPropertyToPropertyChanges(changeTracker, sourceFile, info, ModifierFlags.Override);
    }

    function isClassElementHasJSDoc(node: Node): node is ClassElementHasJSDoc {
        switch (node.kind) {
            case SyntaxKind.Constructor:
            case SyntaxKind.PropertyDeclaration:
            case SyntaxKind.MethodDeclaration:
            case SyntaxKind.GetAccessor:
            case SyntaxKind.SetAccessor:
                return true;
            default:
                return false;
        }
    }

    function findContainerClassElement(sourceFile: SourceFile, pos: number) {
        const token = getTokenAtPosition(sourceFile, pos);
        const classElement = findAncestor(token, node => {
            if (isClassLike(node)) return "quit";
            return isClassElementHasJSDoc(node);
        });

        Debug.assert(classElement && isClassElementHasJSDoc(classElement));
        return classElement;
    }
}

