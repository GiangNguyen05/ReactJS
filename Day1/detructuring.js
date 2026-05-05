const user = ["alice", "bob", "charlie", "dave", "eve"];
const [first, , second, third] = user;
console.log(first);
console.log(second);
console.log(third);
console.log("-----------------------");

const object = {
  name: "G",
  age: 2,
};

const { name, age } = object;
console.log(name, age);
