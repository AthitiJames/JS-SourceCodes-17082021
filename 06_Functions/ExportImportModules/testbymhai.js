// let a = 4;
// let b = 2;
// console.log(marub2());

// let marub = function marub2(){
//     return a + b + 100;
// }



// let num = {numForRandom: function(){return Math.floor(Math.random() * 100) + 1}} 

class ranDom{
constructor(){
    let _numArray = [];
 }

 randomNumArray(){
    let numArray = [];
    console.log("Random is Working!");
    for(let i=0; i<3 ;i++){
        numArray[i] = Math.floor(Math.random() * 100) + 1;
    } 
    this._numArray = numArray;
 }

get numArray(){
    return this._numArray;
 }

toString(){
    return `Random Number = ${this._numArray}`
 }
}

let r = new ranDom();
r.randomNumArray();
console.log(r.toString());






