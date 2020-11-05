//// [override10.ts]
abstract class Base {
    abstract foo(): unknown;
    abstract bar(): void;
}

// No errors:
abstract class Sub extends Base {
    override abstract foo(): number;
    bar() { }
}

//// [override10.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
// No errors:
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sub.prototype.bar = function () { };
    return Sub;
}(Base));


//// [override10.d.ts]
declare abstract class Base {
    abstract foo(): unknown;
    abstract bar(): void;
}
declare abstract class Sub extends Base {
    abstract foo(): number;
    bar(): void;
}
