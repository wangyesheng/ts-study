export {};

function sleep(target: any) {
  console.log(target);
}

function eat(target: any) {
  // target => 类本身
  target.prototype.eat = function (...args: any) {
    console.log(args);
  };
}

function say(target: any) {
  console.log(target);
}

function toUpperCase(target: any, key: string) {
  // target => 类的原型
  let _value = "";
  console.log("toUpperCase", target[key]);
  Object.defineProperty(target, key, {
    get() {
      return _value.toUpperCase();
    },
    set(newValue) {
      _value = newValue;
    },
  });
}

function withDouble(offest: number) {
  return function (target: any, key: string) {
    // target => 类本身
    let _value: number = target[key];
    console.log("withDouble", target[key]);
    Object.defineProperty(target, key, {
      get() {
        return _value * offest;
      },
      set(newValue) {
        _value = newValue;
      },
    });
  };
}

function withEnum(flag: boolean) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    // target => 类的原型
    descriptor.enumerable = false;
  };
}

function withParams(target: any, key: string, index: number) {
  // target => 类的原型
  // key => 修饰的方法名
  // index => 修饰的参数索引
  console.log("withParams", target, key, index, target[key]);

  // target[key]();
}

@sleep
@eat
class Person {
  eat!: (args: string) => void;

  @toUpperCase
  name: string = "hana";

  @withDouble(2)
  static money: number = 10;

  @withEnum(false)
  play(@withParams p1: any, @withParams p2: any) {
    console.log(p1, p2);
  }
}

var p = new Person();

p.eat("water");
p.name = "kitty";
console.log(p.name);

console.log("money", Person.money);
Person.money = 100;
console.log("money", Person.money);

console.log("withEnum", p);

p.play(1, 2);
