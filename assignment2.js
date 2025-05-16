function area() {
  return this.length * this.breadth;
}

const square = {
  length: 5,
  breadth: 5,
  area: area
};


const rectangle = {
  length: 10,
  breadth: 6,
  area: area
};


console.log("Area of the square:", square.area());
console.log("Area of the rectangle:", rectangle.area());
