// Destructuring + loops -----------------------------------------------

// var clothingItem = {
//   price: 50,
//   color: "beige",
//   material: "cotton",
//   season: "autumn",
// };

// for (const key of Object.keys(clothingItem)) {
//   console.log(key, ":", clothingItem[key]);
// }

// let car = {
//   speed: "fast",
//   sedan: true,
//   color: "red",
// };

// console.log("CARRRRRR-------");
// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }

// const sportsCar = Object.create(car);
// sportsCar.speed = "Super-fast";

// console.log("SPORTSCARRRR-----");
// for (key in sportsCar) {
//   console.log(key + ": " + sportsCar[key]);
// }
// console.log("SPORTSCARRRR FOR OF -----");
// for (key of Object.keys(sportsCar)) {
//   console.log(key + ": " + sportsCar[key]);
// }

// let color = ["red", "blue", "green"];
// let fiveColors = [...color, "yellow", "orange"];
// // console.log(fiveColors);
// let [x, y, z, ...extraColors] = fiveColors;

// console.log(extraColors);

// let obj = {
//   key: 1,
//   value: 4,
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);

// function scopeTest() {
//   var y = 44;

//   console.log(x);
// }

// var x = 33;
// scopeTest();

// class Animal {}

// class Dog extends Animal {
//   constructor() {
//     super();
//     this.noise = "bark";
//   }

//   makeNoise() {
//     return this.noise;
//   }
// }

// class Wolf extends Dog {
//   constructor() {
//     super();
//     this.noise = "growl";
//   }
// }

// var result = new Wolf();
// console.log(result.makeNoise());

// const [a, b] = [1, 2, 3, 4];

// console.log(b);

// function count(...food) {
//   console.log(food.length);
// }

// count("Burgers", "Fries", null);
