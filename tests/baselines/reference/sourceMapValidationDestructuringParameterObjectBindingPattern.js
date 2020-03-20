//// [sourceMapValidationDestructuringParameterObjectBindingPattern.ts]
interface Robot {
    name: string;
    skill: string;
}
declare var console: {
    log(msg: string): void;
}
var hello = "hello";
var robotA: Robot = { name: "mower", skill: "mowing" };

function foo1({ name: nameA }: Robot) {
    console.log(nameA);
}
function foo2({ name: nameB, skill: skillB }: Robot) {
    console.log(nameB);
}
function foo3({ name }: Robot) {
    console.log(name);
}

foo1(robotA);
foo1({ name: "Edger", skill: "cutting edges" });

foo2(robotA);
foo2({ name: "Edger", skill: "cutting edges" });

foo3(robotA);
foo3({ name: "Edger", skill: "cutting edges" });


//// [sourceMapValidationDestructuringParameterObjectBindingPattern.js]
var hello = "hello";
var robotA = { name: "mower", skill: "mowing" };
function foo1(_a) {
    var nameA = _a.name;
    console.log(nameA);
}
function foo2(_b) {
    var nameB = _b.name, skillB = _b.skill;
    console.log(nameB);
}
function foo3(_c) {
    var name = _c.name;
    console.log(name);
}
foo1(robotA);
foo1({ name: "Edger", skill: "cutting edges" });
foo2(robotA);
foo2({ name: "Edger", skill: "cutting edges" });
foo3(robotA);
foo3({ name: "Edger", skill: "cutting edges" });
//# sourceMappingURL=sourceMapValidationDestructuringParameterObjectBindingPattern.js.map