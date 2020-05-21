class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jy = new Human("juyoung", 27);

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `hello, my name is ${name}, ${age} years old , ${
    gender ? gender : "nope"
  }`;
};

console.log(sayHi(jy));

export {};
