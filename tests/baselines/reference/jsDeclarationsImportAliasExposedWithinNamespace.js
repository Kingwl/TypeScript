//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsImportAliasExposedWithinNamespace.ts] ////

//// [file.js]
/**
 * @namespace myTypes
 * @global
 * @type {Object<string,*>}
 */
const myTypes = {
    // SOME PROPS HERE
};

/** @typedef {string|RegExp|Array<string|RegExp>} myTypes.typeA */

/**
 * @typedef myTypes.typeB
 * @property {myTypes.typeA}    prop1 - Prop 1.
 * @property {string}           prop2 - Prop 2.
 */

/** @typedef {myTypes.typeB|Function} myTypes.typeC */

export {myTypes};
//// [file2.js]
import {myTypes} from './file.js';

/**
 * @namespace testFnTypes
 * @global
 * @type {Object<string,*>}
 */
const testFnTypes = {
    // SOME PROPS HERE
};

/** @typedef {boolean|myTypes.typeC} testFnTypes.input */

/**
 * @function testFn
 * @description A test function.
 * @param {testFnTypes.input} input - Input.
 * @returns {number|null} Result.
 */
function testFn(input) {
    if (typeof input === 'number') {
        return 2 * input;
    } else {
        return null;
    }
}

export {testFn, testFnTypes};



//// [file.d.ts]
/**
 * @namespace myTypes
 * @global
 * @type {Object<string,*>}
 */
export const myTypes: {
    [x: string]: any;
};
export namespace myTypes {
    type typeA = string | RegExp | (string | RegExp)[];
    type typeB = {
        /**
         * - Prop 1.
         */
        prop1: string | RegExp | (string | RegExp)[];
        /**
         * - Prop 2.
         */
        prop2: string;
    };
    type typeC = Function | typeB;
}
//// [file2.d.ts]
export type testFn = () => any;
/** @typedef {boolean|myTypes.typeC} testFnTypes.input */
/**
 * @function testFn
 * @description A test function.
 * @param {testFnTypes.input} input - Input.
 * @returns {number|null} Result.
 */
export function testFn(input: boolean | Function | myTypes.typeB): number | null;
/**
 * @namespace testFnTypes
 * @global
 * @type {Object<string,*>}
 */
export const testFnTypes: {
    [x: string]: any;
};
export namespace testFnTypes {
    type input = boolean | Function | myTypes.typeB;
}
import { myTypes } from "./file.js";
