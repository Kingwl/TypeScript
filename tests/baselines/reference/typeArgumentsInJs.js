//// [tests/cases/compiler/typeArgumentsInJs.ts] ////

//// [a.js]
if((0)<0>(0)){ }

function f1() {}
f1<1>();
new f1<1>();

function t1(a) {}
t1<1>``;

function sealed1(a) { return function seal(ctor) {} }
@sealed1<1>(1)
class Greeter1 {}

//// [b.jsx]
if((0)<0>(0)){ }

function Test1() {}
const a1 = <Test1<1>></Test1>;

//// [c.ts]
if((0)<0>(0)){ }

function f2<T>() {}
f2<1>();
new f2<1>();

function t2<T>(a) {}
t2<1>``;

function sealed2<T>(a: T) { return function seal(ctor) {} }
@sealed2<1>(1)
class Greeter2 {}

//// [d.tsx]
if((0)<0>(0)){ }

function Test2<T>() {}
const a2 = <Test2<1>></Test2>



//// [a.js]
if ((0) < 0 > (0)) { }
function f1() { }
f1 < 1 > ();
new f1 < 1 > ();
function t1(a) { }
t1 < 1 > "";
function sealed1(a) { return function seal(ctor) { }; }
 < 1 > (1);
var Greeter1 = /** @class */ (function () {
    function Greeter1() {
    }
    return Greeter1;
}());
//// [b.jsx]
if ((0) < 0 > (0)) { }
function Test1() { }
var a1 = <Test1 />, < />;
1 >> ;
Test1 > ;
//// [c.js]
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
if ((0)(0)) { }
function f2() { }
f2();
new f2();
function t2(a) { }
t2(__makeTemplateObject([""], [""]));
function sealed2(a) { return function seal(ctor) { }; }
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
    }
    Greeter2 = __decorate([
        sealed2(1)
    ], Greeter2);
    return Greeter2;
}());
//// [d.jsx]
if ((0)(0)) { }
function Test2() { }
var a2 = <Test2></Test2>;
