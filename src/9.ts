/**
 * ts 中的条件类型
 */

export {};

interface IBrid {
  name: string;
}

interface IFish {
  type: string;
}

interface ISwim {
  swim: string;
}

interface IFly {
  fly: string;
}

interface ITiger {
  kind: string;
}

type Env<T extends IBrid | IFish> = T extends IBrid ? IFly : ISwim;

let env!: Env<IFish>;
let env1!: Env<IBrid | IFish>;
// let env2!: Env<IBrid | IFish | ITiger>;

/**
 * eg1
 * 如果用户传递了name属性，就必须传递age；其他情况下，用户可以只传递age
 */

interface ISchool1 {
  name: string;
  age: number;
}

interface ISchool2 {
  age: number;
  kind?: string;
}

type School<T> = T extends ISchool1 ? ISchool1 : ISchool2;

type ISchool3 = ISchool1 & { kind: number };

let s: School<ISchool1> = {
  name: "",
  age: 1,
};

let s1: ISchool3 = {
  name: "",
  age: 1,
  kind: 2,
};

s = s1;
