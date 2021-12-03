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
