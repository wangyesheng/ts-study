/**
 * ts 中的内置类型
 */

export {};

// 内置类型包含条件的情况（内部用条件来实现）

// Exclude<T,K> => 从多个类型中排除某一个类型
type Exclude<T, K> = T extends K ? never : T;
type MyExclude = Exclude<string | number | boolean, boolean>;

// Extract<T,K> => 从多个类型中提取某一个类型
type Extract<T, K> = T extends K ? T : never;
type MyExtract = Extract<string | number | boolean, string>;

// NonNullable<T> => 排除 null 和 undefined
type NonNullable<T> = T extends null | undefined ? never : T;
type NoNull = NonNullable<string | number | null | undefined>;

/**
 * infer 推断
 */

function getReturnType(a1: string, a2: number) {
  return {
    name: "",
    age: 1,
    kind: "",
  };
}

// infer 要配合 extends 关键字，否则无法使用，infer 放在谁前面就推断谁
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
type MyReturnType = ReturnType<typeof getReturnType>;

type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : any;
type MyParaType = Parameters<typeof getReturnType>;
let param: MyParaType = ["", 1];

class Person {
  constructor(
    public name: string,
    public age: number,
    public hobbies: string[]
  ) {}
}

type ConstructorParameters<T extends new (...args: any[]) => any> =
  T extends new (...args: infer CP) => any ? CP : never;

type CP = ConstructorParameters<typeof Person>;

/** -------------------------------------------------------------------------- */
interface ICompany {
  name: string;
  address: string;
}
interface IPerson {
  name: string;
  age: number;
  hobbies: string[];
  company: ICompany;
}

// 表示属性可填可不填
type Partial<T> = {
  [K in keyof T]?: T[K];
};
type SuperPartial<T> = {
  [K in keyof T]?: T[K] extends object ? Partial<T[K]> : T[K];
};
type MyPa = Partial<IPerson>;
type MySPa = SuperPartial<IPerson>;

let su: MySPa = {
  company: {},
};

// -? => 去掉可选
type Required<T> = {
  [K in keyof T]-?: T[K];
};

type MyRequired = Required<MyPa>;

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};
type MyReadonly = Readonly<MyRequired>;

// Pick 对象里挑选属性
type Pick<T, K extends keyof T> = {
  [X in K]: T[X];
};
type MyPick = Pick<MyPa, "name">;
type KK = keyof IPerson; // 字面量类型 'name' | 'age' | 'hobbies' | 'company'

// Omit 忽略属性
// 想将 IAnimal 中的 origin 属性变为必填
interface IAnimal {
  kind: string;
  name?: string;
  origin?: string;
}

// 0. K => 'origin'
// 1. keyof T => 'kind' | 'name' | 'origin'
// 2. Exclude<keyof T, K> => 从 'kind' | 'name' | 'origin' 排除 'origin' 属性，得到 'kind' | 'name'
// 3. Pick<T,'kind' | 'name'> => 从类型 T 中挑选出 'kind' 、 'name' 属性
type Omit1<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// keyof any => string | number | symbol
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type MyOmit = Omit<IAnimal, "origin">;

type INewAnimalType = MyOmit & { origin: string };

type Record<K extends keyof any, T> = {
  [P in K]: T;
};
let recordMap: Record<string, any> = {
  a: 1,
  b: "2",
  c: false,
};

let person1 = {
  name: "kitty",
  age: 18,
  address: "",
};

let person2 = {
  address: "",
};

// 1. 差集，{name:string, age:number}

// type Diff = Omit<typeof person1, "address">;
type Diff<T extends object, K extends object> = Omit<T, keyof K>;
type MyDiff = Diff<typeof person1, typeof person2>;

// 2.交集，{address:string}
//
type Inter<T extends object, K extends object> = Pick<
  T,
  // keyof T => 'name' | 'age' | 'address'
  // keyof K => 'address'
  // Extract<keyof T, keyof K> => 从 'name' | 'age' | 'address' 中提取 'address' 类型
  Extract<keyof T, keyof K>
>;
type MyInter = Inter<typeof person1, typeof person2>;

type AnyType = keyof typeof person1;
