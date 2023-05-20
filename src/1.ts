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

let nullValue = null;
let undefinedValue: undefined = undefined;
// null undefined 是任何类型的子类型 => 需要将 tsconfig.json 中的 `strictNullChecks` 改为 false 或者直接将 `strict` 改为 false
// let num123: number = undefined;
// let num1234: number = null;

// never 代表代码无法达到终点，出错、死循环、永远走不到的判断，是任何类型的子类型，不用将 tsconfig.json 中的 `strictNullChecks` 改为 false 或者直接将 `strict` 改为 false
function foo(value: string) {
  if (typeof value === "string") {
  } else {
    console.log(value); // 帮助代码做完整校验
  }
}

function neverFn(): never {
  throw new Error("test never");
  console.log(111);
}

// 如果这行代码执行报错了 那么下面的代码也不会走 ，除非用 trycatch 包裹下
// let str11 = neverFn();

// try {
//   let str12 = neverFn();
// } catch (error) {}

// void 用来表示函数的返回值，也可以描述变量，只能将 undefined 赋给它，如果要将 null 赋给它需要将 tsconfig.json 中的 `strictNullChecks` 改为 false
let s1: void = undefined;
// let s2: void = null;
function sayhi(): void {
  return undefined;
}
console.log(sayhi());
console.log(s1);

// object表示除原始类型外（ number string boolean undefined null symbol )
function bar(obj: object) {}
bar({});
bar(function () {});
bar([]);
bar(new Date());
// bar(1);

export {};
