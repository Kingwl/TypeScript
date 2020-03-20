//// [tests/cases/compiler/declarationEmitComputedNameCausesImportToBePainted.ts] ////

//// [context.ts]
export const Key = Symbol();
export interface Context {
  [Key]: string;
}
//// [index.ts]
import { Key, Context } from "./context";

export const context: Context = {
  [Key]: 'bar',
}

export const withContext = ({ [Key]: value }: Context) => value;

//// [context.js]
"use strict";
exports.__esModule = true;
exports.Key = void 0;
exports.Key = Symbol();
//// [index.js]
"use strict";
var _a;
exports.__esModule = true;
exports.withContext = exports.context = void 0;
var context_1 = require("./context");
exports.context = (_a = {},
    _a[context_1.Key] = 'bar',
    _a);
exports.withContext = function (_b) {
    var _c = context_1.Key, value = _b[_c];
    return value;
};


//// [context.d.ts]
export declare const Key: unique symbol;
export interface Context {
    [Key]: string;
}
//// [index.d.ts]
import { Key, Context } from "./context";
export declare const context: Context;
export declare const withContext: ({ [Key]: value }: Context) => string;
