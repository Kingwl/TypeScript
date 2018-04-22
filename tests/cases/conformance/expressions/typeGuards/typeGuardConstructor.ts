class A { }

class B extends A {
  test (a: number) { return a + 1; }
}

declare const foo: A;

if (foo.constructor === B) {
    foo.test(1);
}
