class Human {
  constructor(name) {
    this.name = name;
    this.title = "oke";
    this.work = "work";
  }
  doWork() {
    return "complete";
  }
  getName() {
    return this.name;
  }
}

class Employee extends Human {
  constructor(props, height) {
    super(props);
    this.height = height;
  }
}

module.exports = Employee;
