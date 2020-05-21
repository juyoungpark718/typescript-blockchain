interface Human {
  name: string;
  age: number;
  gender: string;
}

const person: Human = {
  name: "juyoung",
  age: 27,
  gender: "male",
};

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `hello, my name is ${name}, ${age} years old , ${gender}`;
};

console.log(sayHi(person));

export {};
