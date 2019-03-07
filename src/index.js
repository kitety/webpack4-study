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
