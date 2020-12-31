//// [shouldWarnIfKeywordAsDeclarationName1.ts]
type T<enum> = number;

function f<enum> () {};

//// [shouldWarnIfKeywordAsDeclarationName1.js]
function f() { }
;
