export {};

// 联合类型 => 类型可以是联合中的任意一个
let numberOrString: string | number;
// 默认联合类型在没有复制之前，只能调用两个类型的公共方法
numberOrString = "";
numberOrString = 12;

// 场景？在取值的时候也会遇到联合类型
const app: HTMLElement | null = document.getElementById("app");
app && (app.innerHTML = "cba");
// app!  非空断言，表示这个变量一定不为空
app!.innerHTML = "abc";
// 直接强转成某个类型
(app as HTMLElement).innerHTML = "hello";
(<HTMLElement>app).innerHTML = "world";

// (app as unknown as string).startsWith("111");

// ? => 链判断运算符（js）=> a && a.b && a.b.c
// app?.style.color='#fff'
app!.style.color = "#1890ff";

// a??b => 只要前面一个值不是 null 或 undefined 就把这个值返回，如果是就返回后面的
console.log(false ?? true);
console.log(false || true);

// 字面量类型，类型的内容是固定的，枚举
let str: "a" | "b" | "c";
// str = "d";

type IType1 = "a" | "b" | "c";

let str1: IType1 = "c";
