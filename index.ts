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
//intersection types
type FooBar = Foo | bar;

const test: FooBar = {
  a: 2,
  b: "test",
  c: false,
};
