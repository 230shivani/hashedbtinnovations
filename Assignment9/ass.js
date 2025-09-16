
function scopeExample() {
  if (true) {
    var a = "I am var";
    let b = "I am let";
    const c = "I am const";
    console.log(a); // ✅ "I am var"
    console.log(b); // ✅ "I am let"
    console.log(c); // ✅ "I am const"
  }
  console.log(a); // ✅ "I am var" (var is function-scoped)
  // console.log(b); // ❌ Uncommenting this will cause error
}
scopeExample();

console.log("---------------");

// 2️⃣ Accessing Array Elements
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
function getSecondFruit(arr) {
  return arr[1];
}
console.log(getSecondFruit(fruits)); // ✅ "Banana"

console.log("---------------");

// 3️⃣ Modifying Array
function modifyArray(arr) {
  arr.push("New Element"); // adds element
  arr.pop();               // removes last element
  return arr;
}
console.log(modifyArray([1, 2, 3])); // ✅ [1, 2, 3]

console.log("---------------");

// 4️⃣ Square Numbers
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log(squareNumbers(numbers)); // ✅ [1, 4, 9, 16, 25]

console.log("---------------");

// 5️⃣ Filter Odd Numbers
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // ✅ [1, 3, 5]

console.log("---------------");

// 6️⃣ Object Greet Function
const person = { name: "Shivani", age: 21, occupation: "Student" };
function greet(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old, and I work as a ${p.occupation}.`);
}
greet(person);

console.log("---------------");

// 7️⃣ Rectangle Area
function rectangleArea(obj) {
  return obj.width * obj.height;
}
console.log(rectangleArea({ width: 5, height: 10 })); // ✅ 50

console.log("---------------");

// 8️⃣ Get Object Keys
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); // ✅ ["a", "b", "c"]

console.log("---------------");

// 9️⃣ Merge Objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1 }, { b: 2 })); // ✅ { a: 1, b: 2 }

console.log("---------------");

// 🔟 Sum Array
const nums = [10, 20, 30, 40];
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray(nums)); // ✅ 100
