interface IAnimal {
  kind: string;
}

interface IPerson extends IAnimal {
  name: string;
}

type ICat = IAnimal & { name: string; age: number };

const p1: IPerson = {
  kind: "",
  name: "",
};

const c1: ICat = {
  kind: "",
  name: "",
  age: 18,
};

/**
 * 基础类型的兼容性
 * 少的可以赋给多的
 */
let numOrStr!: number | string;
// numOrStr => { toLocaleString, toString, valueOf }

let str!: string;

numOrStr = str;

interface MyStr {
  toString(): string;
}

let str1!: MyStr;
let str2!: string;
str1 = str2;

/**
 * 接口的兼容性
 * 多的可以赋给少的
 */
interface IVegetables {
  color: string;
  taste: string;
}

interface ITomato {
  color: string;
  taste: string;
  size: string;
}

// 将一个值赋予给类型，是不会出现兼容性的，要求必须满足这个接口
// let vegetables1: IVegetables = {
//   color: "red",
//   taste: "sweet",
//   size: "small",
// };

// 两个接口（类型）之间是存在兼容性的
let vegetables!: IVegetables;
let tomato: ITomato = {
  color: "red",
  taste: "sweet",
  size: "small",
};
vegetables = tomato;

/**
 * 函数的兼容性
 * 参数：少的可以赋值给多的，但是多的不可以赋值给少的
 * 返回值：多的可以赋值给少的，但是少的不可以赋值给多的
 */
let join1: (a: string, b: string) => string = (a, b) => a + b;
let join2: (a: string) => string = (a) => a;
join1 = join2;

export {};
