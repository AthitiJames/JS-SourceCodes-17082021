const add = function (n1, n2) {
    return n1 + n2;
};
// console.log(add(5, 2));

function operator(n1, n2, fn) {
    return fn(n1, n2); // not equals to "return fn"
}


let addResult3 = operator(5, 3, add); // not equals to "operator( 5, 3, add())"
console.log(addResult3);

let i ;
console.log(typeof(i));







let greeting = 'Welcome everyone in family';
function outer(name) {
  //higher order function
  let family = [];
  family.unshift(name);

  //inner is a closure function
  function inner(newMember) {
    console.log(greeting);
    family.unshift(newMember);
    return family;
  }

  return inner; //return inner function
}

const myInner = outer('Umaporn');
console.log(myInner('John'));
console.log(myInner('SuSan'));