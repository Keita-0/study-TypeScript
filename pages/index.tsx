import type { NextPage } from "next";

//Array型
const foo: number[] = [1, 2, 3, 4];

//tuple型
const foo2: [number, string] = [1, "test"];

//void型
const foo3 = (): void => {
  alert("test");
};

let obj1: Record<string, number> = {
  a: 1,
  b: 3,
};

let obj2: { [key: string]: { foo: string } } = {
  a: {
    foo: "c",
  },
  b: { foo: "v" },
};

//Never型
const foo4 = (bar: "a" | "b"): "a" | "b" => {
  switch (bar) {
    case "a":
      return bar;
    case "b":
      return bar;
    default:
      return bar;
  }
};

//intersction types(交差型)
type Foo = {
  a: string;
  b: boolean;
};

type Foo2 = {
  c: string;
};

type Foo3 = Foo & Foo2;

//union types
type Foo4 = Foo | Foo2;

const test2: Foo4 = {
  a: "test",
  b: true,
};

const test: Foo3 = {
  a: "1",
  b: false,
  c: "test",
};

console.log(foo2);

const Components = (props: { foo: boolean }) => {
  if (props.foo) {
    return <div> a</div>;
  }
  return <div>test</div>;
};

const Home: NextPage = () => {
  return <Components foo={true} />;
};

export default Home;
