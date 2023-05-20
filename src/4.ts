export {};

// class Pointer {
//   x!: number;
//   y!: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

class Pointer {
  constructor(public x: number, public y: number) {}
}
const p = new Pointer(100, 100);
console.log(p.x, p.y);

enum AnimalType {
  Mammal,
  Amphibians,
  RoundMouth,
  Birds,
  Fish,
  Reptile,
}

type IGender = "Male" | "Female";

class Animal {
  protected constructor(
    public type: AnimalType,
    // readonly => 修饰属性，表示仅读，初始化完毕就不能改了（constructor中还是属于初始化）。区别于 const 声明变量
    public readonly money: number,
    // protected => 修饰属性，表示受保护的，只能在当前类和子类中访问
    protected uuid: string
  ) {
    this.money = money;
  }
}

class Cat extends Animal {
  // private => 修饰属性，表示私有的，只能在当前类中访问
  private _address: string = "zoom";

  constructor(
    type: AnimalType,
    money: number,
    // public => 修饰属性，表示公开的，任何地方都可以访问
    public name: string,
    public age: number
  ) {
    super(type, money, Math.random().toString()); // Animal.call(this,type,name,age)
  }

  // 静态属性，es7+
  static bowl: string = "Gold bowl";

  // 静态属性，属性访问器，es6
  // static get bowl() {
  //   return "Gold bowl";
  // }

  // 静态方法
  static getBowl() {
    return Cat.bowl;
  }

  private _gender: IGender = "Male";
  // 原型属性
  get gender() {
    return this._gender;
  }
  set gender(value: IGender) {
    this._gender = value;
  }

  // 原型方法
  say() {
    console.log(this._address);
  }
}

console.log(Cat);
const cat = new Cat(AnimalType.Mammal, 100, "kitty", 1);
cat.say();

cat.gender = "Female";

console.log(Cat.getBowl());
console.log(cat);

console.log(cat.type);
