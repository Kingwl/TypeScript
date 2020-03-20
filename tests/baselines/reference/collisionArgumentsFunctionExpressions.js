//// [collisionArgumentsFunctionExpressions.ts]
function foo() {
    function f1(arguments: number, ...restParameters) { //arguments is error
        var arguments = 10; // no error
    }
    function f12(i: number, ...arguments) { //arguments is error
        var arguments: any[]; // no error
    }
    function f1NoError(arguments: number) { // no error
        var arguments = 10; // no error
    }

    function f3(...restParameters) {
        var arguments = 10; // no error
    }
    function f3NoError() {
        var arguments = 10; // no error
    }

    function f4(arguments: number, ...rest); // no codegen no error
    function f4(arguments: string, ...rest); // no codegen no error
    function f4(arguments: any, ...rest) { // error
        var arguments: any; // No error
    }
    function f42(i: number, ...arguments); // no codegen no error
    function f42(i: string, ...arguments); // no codegen no error
    function f42(i: any, ...arguments) { // error
        var arguments: any[]; // No error
    }
    function f4NoError(arguments: number); // no error
    function f4NoError(arguments: string); // no error
    function f4NoError(arguments: any) { // no error
        var arguments: any; // No error
    }
}

//// [collisionArgumentsFunctionExpressions.js]
function foo() {
    function f1(arguments) {
        var restParameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restParameters[_i - 1] = arguments[_i];
        }
        var arguments = 10; // no error
    }
    function f12(i) {
        var arguments = [];
        for (var _a = 1; _a < arguments.length; _a++) {
            arguments[_a - 1] = arguments[_a];
        }
        var arguments; // no error
    }
    function f1NoError(arguments) {
        var arguments = 10; // no error
    }
    function f3() {
        var restParameters = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            restParameters[_b] = arguments[_b];
        }
        var arguments = 10; // no error
    }
    function f3NoError() {
        var arguments = 10; // no error
    }
    function f4(arguments) {
        var rest = [];
        for (var _c = 1; _c < arguments.length; _c++) {
            rest[_c - 1] = arguments[_c];
        }
        var arguments; // No error
    }
    function f42(i) {
        var arguments = [];
        for (var _d = 1; _d < arguments.length; _d++) {
            arguments[_d - 1] = arguments[_d];
        }
        var arguments; // No error
    }
    function f4NoError(arguments) {
        var arguments; // No error
    }
}
