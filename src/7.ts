import { AnimalType } from "./types";

export {};

type IClass<T> = {
  new (): T;
};

const createInstance = <T>(clazz: IClass<T>) => {
  return new clazz();
};

class Person {
  person: string = "Person";
}

class Dog {
  dog: string = "Dog";
}

const instance = createInstance<Person>(Person);
const instance1 = createInstance<Dog>(Dog);

instance.person;
instance1.dog;

// T extends string => 约束泛型 T 必须继承自 string
const sum = <T extends number>(a: T, b: T): T => {
  return (a + b) as T;
};

console.log(sum(1, 2));

// 判断 key 是否是 obj 里的属性
// keyof T => 取 T 里面所有的属性
function getVal<T extends object, K extends keyof T>(obj: T, key: K): boolean {
  return key in obj;
}

getVal({ a: "", b: "" }, "a");

var obj = {
  a: 1,
  b: 2,
};

console.log(typeof obj);

interface IFish {
  swimming: string;
}

interface IBrid {
  flying: string;
}

function isFish(animal: IFish | IBrid): animal is IFish {
  return "swimming" in animal;
}

function getAnimalType(animal: IFish | IBrid) {
  if (isFish(animal)) {
    console.log(animal.swimming);
  } else {
    console.log(animal.flying);
  }
}

getAnimalType({
  flying: "flying",
});
