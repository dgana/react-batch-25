class Shape {
  constructor(obj) {
    this.obj = obj;
  }
  move(x, y) {
    this.obj = {
      id: this.obj.id,
      x,
      y
    };
    return this;
  }
}

class Rectangle extends Shape {
  constructor(props, width, height) {
    super(props);
    this.width = width;
    this.height = height;
  }
}

// const myShape = new Shape(1, 2, 3);
const myRectangle = new Rectangle({ id: 1, x: 10, y: 5 }, 4, 5);

console.log(myRectangle);
