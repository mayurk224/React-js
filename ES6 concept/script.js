// Logical AND && Logical OR ||
function getName(name) {
  return name;
}
let a = true;
let b = true;
let c = false;
console.log(a && b);
console.log(a && getName("Mayur"));
console.log(a || b);
console.log(c && a);

// Template Literals

let name = "Mayur";
let name2 = "Kamble";
console.log(name + " " + name2, `${name} ${name2}`);

// Ternary Operators

let showRecipe1 = false;
function getRecipe1(recipeName) {
  return recipeName;
}
function getRecipe2(recipeName) {
  return recipeName;
}
// using if else block
if (showRecipe1) {
  console.log(getRecipe1("Pizza"));
} else {
  console.log(getRecipe2("Coke"));
}
// use conditional operator
showRecipe1
  ? console.log(getRecipe1("Pizza"))
  : console.log(getRecipe2("Coke"));

// Destructuring Objects
const id = 1;
const productName = "Apple Watch";
const rating = 5;

const product = { id, productName, rating };

console.log(product);

const product2 = {
  description: "product 2 description",
  id,
  productName,
  rating,
};
// normal way to get description from product 2
console.log(product2.description);
// using destructuring
const { description } = product2;
console.log(description);

const array = [1, 2, 3, 4];
const [
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement,
] = array;
console.log(
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement
);

// default parameters, spread, rest operators

function multiplyTwoNum(num1, num2) {
  // here num1 and num2 dont have any default values so if we cant assign then it will show null
  return num1 * num2;
}
function multiplyTwoNum2(num1 = 1, num2 = 2) {
  return num1 * num2;
}

console.log(multiplyTwoNum()); // Output: null
console.log(multiplyTwoNum2()); // Output: is 2 because it take default values in multiplication
// if we pass values to function then it will overwrite previous values
console.log(multiplyTwoNum2(5, 10));

// spread operator
const array1 = [2, 3, 4];
const array2 = [5, 6, 7];
console.log([130, ...array1, 100, ...array2, 120]); // Output:

function getInfo(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  return "Mayur";
}
console.log(getInfo(1, 2, 3, 4, 5));
function getInfo2(a, b, ...c) {
  console.log(a, b, c);
  return "Mayur";
}
console.log(getInfo2(1, 2, 3, 4, 5));

// map, filter, find, some , every , includes, indexOf, findIndex

const persons = [
  {
    name: "Mayur",
    age: 25,
    city: "Pune",
  },
  {
    name: "Yash",
    age: 25,
    city: "nagpur",
  },
  {
    name: "Happy",
    age: 25,
    city: "bangalore",
  },
];
// map
let getAllNames = persons.map((single, index) => {
  return single.name;
});
console.log(getAllNames); // Output: ["Mayur", "Yash", "Happy"]

//find
let getPerson = persons.find((single, index) => {
  return single.city === "Pune";
});
console.log(getPerson);

// filter
let getPerson2 = persons.filter((single, index) => {
  return single.city === "Pune";
});
console.log(getPerson2);

// some
let checkSome = persons.some((single, index) => {
  return single.age > 30;
});
console.log(checkSome);

// every
let checkEvery = persons.every((single, index) => {
  return single.age > 20;
});
console.log(checkEvery);

// includes
const fruits = ["aaple", "banana", "oranges"];
console.log(fruits.includes("banana"));

// findIndex
let getIndex = persons.findIndex((single, index) => {
  return single.city === "Pune";
});
console.log(getIndex);

// fetching api
let getListOfproductsElement = document.querySelector(".list-of-products");

function renderProducts(getProducts) {
  getListOfproductsElement.innerHTML = getProducts
    .map((singleProductItem) => `<p>${singleProductItem.title}</p>`)
    .join(" ");
}

async function fetchListOfProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const result = await response.json();

    console.log(result);

    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (e) {
    console.log(e);
  }
}

fetchListOfProducts();
