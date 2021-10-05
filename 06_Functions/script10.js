// [subject, student, ...listofStudent] = ['INT201', 50, 'A', 'B', 'C'];
// console.log(subject);
// console.log(student);
// console.log(listofStudent);

// [a, b, c] = [...'INT201'];
// // console.log(a);
// // console.log(b);
// // console.log(c);
// console.log(a);

//function declaration
// function sum(numbers) {
//     let total = 0; //local variable
//     for (let num of numbers) total += num;
//     return total;
//   }
//   console.log(sum([1, 2, 3]));

//   //calling function, function execution
//   sum([1, 2, 5, 10]);
// let letters = [...'Hello World'];
// let value = '';
// for (let [index, letter] of letters.entries()) {
//     console.log(`index: ${index}`);
//     console.log(`letter: ${letter}`);
// }

//Function expression
const myFunc = function (number) {
    let total = 0; //local variable
    for (let num of number) total += num;
    return total;
};
console.log(myFunc([1, 2, 3]));

//function expression +destructuring assignment
const myFunc = function ([num1, num2], [value1, value2]) {
    console.log(num1);
    console.log(num2);
    console.log(value1);
    console.log(value2);
};
//calling function, function execution with spread operator
myFunc([10, 20], [5, 2]);

//1.
function getCourse() {
    return "INT201 Client Side Programming I";
}
//edit
let getCourse = () => "INT201 Client Side Programming I";

//2.
function echo(text) {
    return text;
}
//edit
let echo = (text) => text;

//3.
function isKMUTTStudent(student) {
    if (student.id.length == 13) return true;
    else return false;
}
//edit
let isKMUTTStudent = (student) => {
    return student.id.length == 13 ? true : false;
};

//4.
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
//edit
let sum = (num1, num2, num3) => num1 + num2 + num3;

//5.
function greetingSomeOne(name) {
    const greeting = ["hi", "hello", "hey"];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}
//edit
let greetingSomeOne = (name) => {
    const greeting = ["hi", "hello", "hey"];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
};


//examples of reduce and map functions
let products = [{
        prodId: 1,
        price: 10,
        amount: 2,
    },

    {
        prodId: 2,
        price: 5,
        amount: 10,
    },
];

let priceIncludeVat = products.map(
    (product) => product.price + product.price * 0.07
);

console.log(priceIncludeVat);

let totalAmt = products.reduce(
    (total, curProd) => (total += curProd.amount),0
);

console.log(totalAmt);


//examples of arguments object

let products = [
    {
        prodId: 1,
        price: 10,
        amount: 2
    },

    {
        prodId: 2,
        price: 5,
        amount: 10
    }

];

let products2 = [
    {
        prodId: 3,
        price: 10,
        amount: 2
    },

    {
        prodId: 4,
        price: 5,
        amount: 10
    }

];

function getProducts() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
getProducts(products, products2);



function getProducts(products='Unknown', total = 0) {
    console.log(products);
    console.log(total);
}
getProducts(products);