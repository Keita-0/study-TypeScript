export const color = "red";

const theme = {
  color: "red",
} as const;

type Foo = {
  a: number;
  b: string;
};

type bar = {
  a: string;
  c: boolean;
};

type hoge = {
  a: string;
  d: boolean;
};
//intersection types
type FooBar = Foo | bar | hoge;
type FooBar2 = Foo | bar | hoge;
