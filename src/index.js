// import '@babel/polyfill' // polyfill的另一种方法
import person from "./lib";
import App from './App'

console.log(person);
const greet = () => {
  console.log("hello");
};
greet();

class Test {
  constructor(name) {
    this.name = name;
  }
  logger() {
    console.log("Hello");
  }
}
@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
getPosts()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

// core-js
Object.assign({});
Array.from([1, 2]);
new Promise((resolve, reject) => {
  console.log("promise");
});

// regenerator
function* genFun() {
  yield 1;
}
let g = genFun();
g.next();
