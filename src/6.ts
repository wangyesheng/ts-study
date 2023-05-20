import { AnimalType } from "./types";

export {};

/**
 * interface: 可以被类实现、被其他接口继承，type 不行；同名接口会合并，type同名会报错
 * type 可以实现联合类型，interface 不行
 */

// 1、描述对象类型

interface IAnimal {
  type: AnimalType;
  name: string;
  age: number;
}

const cat: IAnimal = {
  type: AnimalType.Reptile,
  name: "kitty",
  age: 10,
};

// 2、描述接口
type TSum = (a: number, b: number) => number;

interface ISum {
  (a: number, b: number): number;
}

const sum1: TSum = (a, b) => a + b;
const sum2: ISum = (a, b) => a + b;

console.log(sum1(1, 2));
console.log(sum2(2, 3));

interface ICount {
  (): number;
  count: number;
}

type TCount = {
  (): number;
  count: number;
};
const fn: ICount = (() => fn.count++) as ICount;
fn.count = 0;

fn();
fn();
fn();
fn();
fn();
console.log(fn.count);

interface IVIP {
  name: string;
}
interface IVIP {
  age: number;
}

const v: IVIP = {
  name: "",
  age: 1,
};

interface ISuperVIP extends IVIP {
  from: string;
  date?: Date;
  [key: string]: any;
}

const s: ISuperVIP = {
  name: "",
  age: 1,
  from: "",
};

const s1: ISuperVIP = {
  name: "",
  age: 1,
  from: "",
  date: new Date(),
};

const s2: ISuperVIP = {
  name: "",
  age: 1,
  from: "",
  date: new Date(),
  points: 100,
};

console.log(s);
console.log(s1.date);

interface IFields {
  name: string;
  type: number;
  form: string;
  length: number;
}

const f1: IFields = {
  name: "",
  type: 1,
} as IFields;

// 描述类，不同于用 interface 描述函数
interface ISpeakable {
  readonly name: string;
  speak(): void;
}

interface IEatable {
  readonly foodName: string;
  eat(): void;
}

class Brid implements ISpeakable, IEatable {
  readonly foodName: string = "bug";
  eat(): void {
    console.log(`I eat ${this.foodName}`);
  }
  readonly name: string = "parrot";
  speak(): void {
    console.log(`I am a ${this.name}`);
  }
}

const b = new Brid();

b.speak();
b.eat();

abstract class Aniaml {
  abstract name: string;
  say() {
    console.log();
  }
  abstract write(): void;
}

class People extends Aniaml {
  constructor(public name: string) {
    super();
  }
  write(): void {
    throw new Error("Method not implemented.");
  }
}

const p = new People("ann");
p.write();
console.log(p.name);
