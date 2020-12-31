//// [shouldWarnIfKeywordAsDeclarationName2.ts]
type A<T> = T extends [infer enum] ? boolean : never;

//// [shouldWarnIfKeywordAsDeclarationName2.js]
