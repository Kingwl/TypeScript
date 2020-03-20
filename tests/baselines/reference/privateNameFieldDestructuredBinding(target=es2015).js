//// [privateNameFieldDestructuredBinding.ts]
class A {
    #field = 1;
    otherObject = new A();
    testObject() {
        return { x: 10, y: 6 };
    }
    testArray() {
        return [10, 11];
    }
    constructor() {
        let y: number;
        ({ x: this.#field, y } = this.testObject());
        ([this.#field, y] = this.testArray());
        ({ a: this.#field, b: [this.#field] } = { a: 1, b: [2] });
        [this.#field, [this.#field]] = [1, [2]];
        ({ a: this.#field = 1, b: [this.#field = 1] } = { b: [] });
        [this.#field = 2] = [];
        [this.otherObject.#field = 2] = [];
    }
    static test(_a: A) {
        [_a.#field] = [2];
    }
}


//// [privateNameFieldDestructuredBinding.js]
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _field;
class A {
    constructor() {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        _field.set(this, 1);
        this.otherObject = new A();
        let y;
        (_b = this, { x: ({ set value(_m) { __classPrivateFieldSet(_b, _field, _m); } }).value, y } = this.testObject());
        (_c = this, [({ set value(_o) { __classPrivateFieldSet(_c, _field, _o); } }).value, y] = this.testArray());
        (_d = this, _e = this, { a: ({ set value(_p) { __classPrivateFieldSet(_d, _field, _p); } }).value, b: [({ set value(_q) { __classPrivateFieldSet(_e, _field, _q); } }).value] } = { a: 1, b: [2] });
        _f = this, _g = this, [({ set value(_r) { __classPrivateFieldSet(_f, _field, _r); } }).value, [({ set value(_s) { __classPrivateFieldSet(_g, _field, _s); } }).value]] = [1, [2]];
        (_h = this, _j = this, { a: ({ set value(_t) { __classPrivateFieldSet(_h, _field, _t); } }).value = 1, b: [({ set value(_u) { __classPrivateFieldSet(_j, _field, _u); } }).value = 1] } = { b: [] });
        _k = this, [({ set value(_v) { __classPrivateFieldSet(_k, _field, _v); } }).value = 2] = [];
        _l = this.otherObject, [({ set value(_w) { __classPrivateFieldSet(_l, _field, _w); } }).value = 2] = [];
    }
    testObject() {
        return { x: 10, y: 6 };
    }
    testArray() {
        return [10, 11];
    }
    static test(_a) {
        [({ set value(_b) { __classPrivateFieldSet(_a, _field, _b); } }).value] = [2];
    }
}
_field = new WeakMap();
