/// <reference path='fourslash.ts' />

//// const item = [ 1, 2, 3 ] as const
//// call(/*a*/item/*b*/[0])

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Convert to destruction",
    actionName: "Convert to destruction",
    triggerReason: "invoked",
    actionDescription: ts.Diagnostics.Convert_access_expression_to_destruction.message,
    newContent: `const item = [ 1, 2, 3 ] as const
const [index_0] = item
call(index_0)`,
});
