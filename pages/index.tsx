import type { NextPage } from "next";

const foo = "foo" as const;
let foo2 = foo;

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
