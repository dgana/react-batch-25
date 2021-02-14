const person = {
  name: "John Doe",
  age: 30
};

const person2 = {
  name: "Michele",
  age: 29
};

const getPersonInfo = function() {
  return this.name + " " + this.age;
};

const newFunction = getPersonInfo.bind(person2);

console.log(newFunction());
