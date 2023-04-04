let num: number = 1;
let str: string = "foo";
let bool: boolean = false;

let arr: number[] = [1, 2];
let arr1: (number | string)[] = ["1", "2", 0]; // 联合类型，并集的概念
let arr2: Array<boolean | string> = ["1", true];

type IFn = (a: string) => string;
const fn: IFn = (a) => {
  return a;
};

// 元组：内容固定，类型固定
let tuple: [number, string, IFn] = [1, "2", fn];
tuple.push(1, "2", 3, "4", (a) => a); // 放入的时候，可以放入元组中定义的类型
// tuple[5] = 11; // 不能通过索引更改元组中的元素
console.log(tuple);

enum EffectStatus {
  DELETE,
  EDIT,
  ADD,
}
console.log(EffectStatus);
console.log(EffectStatus[0]);
console.log(EffectStatus.DELETE);

enum RoleStatus {
  ADMIN = "admin",
  GUESS = 10,
  SUPER_ADMIN,
}
console.log(RoleStatus);

const enum Gender { // 常量枚举，加上const之后，不会生成一个对象，更简洁
  MALE,
  FEMALE,
}
console.log(Gender.MALE);
