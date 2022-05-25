export const foo: string = "123";

type Foo = typeof foo;

export const obj1 = {
  a: "foo",
  b: 124,
};

const obj: typeof obj1 = {
  a: "test",
  b: 245,
};

export function double(x: number | string) {
  if (typeof x === "string") {
    return Number(x) * 2;
  }
  return x * 2;
}

const obj3 = {
  name: "god",
  age: 123,
  124: 5456,
};

// type key = keyof obj3;
// const test3: key = "age";

function test4(x: keyof typeof obj3) {
  return;
}
test4("name");
test4("age");
test4(124);
