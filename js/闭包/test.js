function foo() {
  return function inner(a, b) {
    const c = a + b;
    return c
  }
}

const f = foo();
console.log(f(1,2));