import { Equal, Expect } from "@total-typescript/helpers";

type PromiseFunc = (input: any) => Promise<any>;

type Example1 = PromiseFunc<string, string>;

type test1 = Expect<Equal<Example1, (input: string) => Promise<string>>>;

type Example2 = PromiseFunc<boolean, number>;

type test2 = Expect<Equal<Example2, (input: boolean) => Promise<number>>>;
