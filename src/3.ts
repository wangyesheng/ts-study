export {};

function sum(x: number, y: number): number {
  return x + y;
}

const sum1 = (n1: number, n2?: number): number => {
  //   return n1 + n2; // 报错，n2 的类型是 number | undefined
  //   return n1 + n2!;
  return n1 + (n2 as number);
};
const sum2 = (n1: number, ...args: number[]): number => {
  //   return n1 + n2; // 报错，n2 的类型是 number | undefined
  //   return n1 + n2!;
  return n1 + args.reduce((memo, current) => memo + current, 0);
};

type ISum = (x: number, y: number) => number;
const sum3: ISum = (a, b) => a + b;

console.log(sum(10, 10));
console.log(sum1(10));
console.log(sum2(10, 10, 10, 10, 10));
console.log(sum3(10, 10));

// 函数重载
function toArray(value: number): number[];
function toArray(value: string): string[];
function toArray(value: string | number): string[] | number[] {
  //   if (typeof value === "string") {
  //     return value.split("");
  //   } else {
  //     return value
  //       .toString()
  //       .split("")
  //       .map((x) => Number(x));
  //   }
  return [value] as string[] | number[];
}

toArray(1);
