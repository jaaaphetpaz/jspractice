// FUNCTIONS PRACTICE

// function letterFinder(word, match) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] == match) {
//       console.log("Found the", match, "at", i);
//     } else {
//       console.log("No match found at", i);
//     }
//   }
// }

// letterFinder("test", "t");

// ARRAYS OBJECTS REVIEW--------------------------------------------

// let arrOfKeys = ["speed", "altitude", "color"];
// let drone = {
//   speed: 100,
//   altitude: 200,
//   color: "red",
// };

// for (let i = 0; i < arrOfKeys.length; i++) {
//   console.log(drone[arrOfKeys[i]]);
// }

// let fruits = [];
// fruits.push("apple");
// fruits.push("banana");

// fruits.pop();
// console.log(fruits);

// MATH FUNCTIONS---------------------------------------------------

// console.log(Math.trunc(12.51231243124));

// console.log(Math.round(Math.random() * 10));

// console.log("ho-ho-ho".lastIndexOf("-")); // 2

// let clothes = [];

// clothes.push("jacket");
// clothes.push("tank-top");
// clothes.push("shirt");
// clothes.push("boxers");
// clothes.push("pants");
// clothes.pop();
// clothes.push("socks");

// console.log(clothes);

// let favCar = {};
// favCar.color = "blue";
// favCar.convertible = false;

// console.log(favCar);

// var result = "Hello".indexOf("l");
// console.log(result);

// try {
//   throw new ReferenceError();
// } catch (err) {
//   console.log(err);
//   console.log("There is an error");
// }

// console.log("we up still");

// function addTwoNums(a, b) {
//   try {
//     if (typeof a !== "number") {
//       throw new ReferenceError("First argument is not a number");
//     } else if (typeof b !== "number") {
//       throw new ReferenceError("Second argument is not a number");
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log(err);
//     console.log("ERROR");
//   }
// }

// addTwoNums(5, "5");
// console.log("still runnin");

// function letterFinder(word, match) {
//   let condition1 = typeof word == "string" && word.length >= 2;
//   let condition2 = typeof match == "string" && match.length === 1;

//   if (!!condition1 && !!condition2) {
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] == match) {
//         //if the current character at position i in the word is equal to the match
//         console.log("Found the", match, "at", i);
//       } else {
//         console.log("---No match found at", i);
//       }
//     }
//   } else {
//     console.log("Please pass the correct arguments");
//   }
// }

// letterFinder("cat", 1);

// var x;

// if (x === null) {
//   console.log("null");
// } else if (x === undefined) {
//   console.log("undefined");
// } else {
//   console.log("ok");
// }

// try {
//   Number(5).toPrecision(300);
// } catch (e) {
//   console.log("There was an error");
// }

// FUNCTIONAL VS OBJECT ORIENTED PROGRAMMING ----------------------------------------------------

// var virtualPet = {
//   sleepy: true,
//   nap: function () {
//     this.sleepy = !this.sleepy;
//   },
// };
// console.log(virtualPet.sleepy); // true
// virtualPet.nap();
// console.log(virtualPet.sleepy); // false
// virtualPet.nap();
// console.log(virtualPet.sleepy); // true

// function addTwoNums(a, b) {
//   console.log(a + b);
// }

// function randomNum() {
//   return Math.floor(Math.random() * 10 + 1);
// }
// function specificNum() {
//   return 42;
// }

// var useRandom = false;

// var getNumber;

// if (useRandom) {
//   getNumber = randomNum;
// } else {
//   getNumber = specificNum;
// }

// addTwoNums(getNumber(), getNumber());

// Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//   var message = "%c" + txt;
//   var style = `color: ${color};`;
//   style += `background: ${background};`;
//   style += `font-size: ${fontSize};`;
//   console.log(message + style);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//   var fontStyle = "color: tomato; font-size: 50px";
//   if (reason == "birthday") {
//     console.log(`%cHappy birthday`, fontStyle);
//   } else if (reason == "champions") {
//     console.log(`%cCongrats on the title!`, fontStyle);
//   } else {
//     console.log(message, style);
//   }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
// celebrateStyler("birthday");
// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate() {
//   consoleStyler("ef7c8e", "fae8e0", "30px", "You made it!");
//   celebrateStyler("champions");
// }
// // Call styleAndCelebrate
// function two() {
//   return 2;
// }

// function one() {
//   return 1;
// }

// function calculate(initialValue, incrementValue) {
//   return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one));

// function meal(animal) {
//   animal.food = animal.food + 10;
// }

// var dog = {
//   food: 10,
// };
// meal(dog);
// meal(dog);

// console.log(dog.food);

// class Vehicle {
//   constructor(passenger, fly) {
//     this.passenger = passenger;
//     this.fly = fly;
//   }
// }
// class Plane extends Vehicle {
//   constructor(purpose, highSpeed, passenger, fly) {
//     super(passenger, fly);
//     this.purpose = purpose;
//     this.highSpeed = highSpeed;
//   }
// }

// let car = new Vehicle(true, false);
// let plane = new Vehicle(true, true);
// let fighterJet = new Plane("army", true, false, true);
// console.log(car);
// console.log(plane);
// console.log(fighterJet);

// class Animal {
//   constructor(lg) {
//     this.legs = lg;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(4);
//   }
// }

// var result = new Dog();
// console.log(result.legs);

// class Animal {}

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);
