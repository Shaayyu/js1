const pii=3.14;
const cylinder = {
    radius : 5,
    height : 10,
    area: function(){
        return pii * this.radius * this.radius * this.height;
    }
};
console.log("Area of the cylinder:", cylinder.area());