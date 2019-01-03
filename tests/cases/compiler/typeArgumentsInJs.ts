// @allowJs: true
// @checkJs: true
// @jsx: preserve
// @experimentalDecorators: true

// @filename: a.js
// @outDir: ./out/

if((0)<0>(0)){ }

function f1() {}
f1<1>();
new f1<1>();

function t1(a) {}
t1<1>``;

function sealed1(a) { return function seal(ctor) {} }
@sealed1<1>(1)
class Greeter1 {}

// @filename: b.jsx
// @outDir: ./out/
if((0)<0>(0)){ }

function Test1() {}
const a1 = <Test1<1>></Test1>;

// @filename: c.ts
// @outDir: ./out/
if((0)<0>(0)){ }

function f2<T>() {}
f2<1>();
new f2<1>();

function t2<T>(a) {}
t2<1>``;

function sealed2<T>(a: T) { return function seal(ctor) {} }
@sealed2<1>(1)
class Greeter2 {}

// @filename: d.tsx
// @outDir: ./out/
if((0)<0>(0)){ }

function Test2<T>() {}
const a2 = <Test2<1>></Test2>

