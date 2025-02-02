//variables, funtion names, and operators are all case sensitive
//Statements in ECMAScript are terminated by a semicolon
//Even semicolon is not required but not recommended to omit the semicolon

// let num = 5;
// let Num = 'This is not a number';
// console.log('num is ' + num);
// console.log('Num is ' + Num);

//Multiple statements can be combined into a code block by using {}
//require code block only when executing multiple statements.

// if (num == 5) {
//   console.log(num + ' equal to 5.');
// } else {
//   console.log(num + 'is not equal to 5.');
// }

// let myNum = 0;
// console.log(`type of myNum is ${typeof myNum}`);

// console.log(`type of myNum is ${typeof num}` );

// let myString = 'Good';
// console.log(`type of myString is ${typeof myString}`);

// let myBool = true;
// console.log(`type of myBool is ${typeof myBool}`);

// let myUndefined;
// console.log(`type of myUndefined is ${typeof myUndefined}`);

// let mySymbol = Symbol();
// console.log(`type of mySymbol is ${typeof mySymbol}`);

// let myNull = null;
// console.log(`type of myNull is ${typeof myNull}`);

// let myArr = [1, 2, 3];

// console.log(`myArr Length: ${myArr.length}`);
// console.log(`type of myArr is ${typeof myArr}`);

let myObj = [
  {
    id: 1,
    task: 'grading exam'
  },
  {
    id: 2,
    task: 'class lecture',
    date: new Date()
  }
];

console.log(`${JSON.stringify(myObj)}`);

let myTestOBj = [
  {
    id: 2,
    name: "James",
    date: new Date()
}
];

console.log(`${JSON.stringify(myTestOBj)}`);
//The JSON.stringify() method converts a JavaScript object or value to a JSON string
// console.log(`type of myObj is ${typeof myObj}`);
