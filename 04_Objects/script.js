// //----------------------------------------------------------------------//
let player1 = {id:1, name:"Adam"}
console.log(Object.prototype.isPrototypeOf(player1));

let adminPlayer = Object.create(player1);
adminPlayer.level = 'Super';


console.log(`${adminPlayer.id}, ${adminPlayer.name}, ${adminPlayer.level}`);

class Dice{
    constructor (gameTitle){
        console.log('constructor is working');
        this._diceName = gameTitle===undefined?'Unknown':gameTitle;
        this._faceValue = 0;
    }

    
    roll(){
        this._faceValue =  Math.floor(Math.random()*6)+1 ;
        return this._faceValue;
        }

    get faceValue(){
        console.log('getter is working');
        return this._faceValue;
    }

    set faceValue(faceValue){
        console.log('setter is working');
        this._faceValue = faceValue;
    }

    toString (){
        return `game: ${this._diceName}, faceValue: ${this._faceValue}`;
    }
}
//#1
let dice1 = new Dice();


// console.log(dice1);
console.log(dice1.roll());

console.log(dice1.faceValue);
console.log(dice1["faceValue"]);
dice1.faceValue = 5;


console.log(dice1.toString());


// let dice2 = new Dice();


// console.log(dice2);
// console.log(dice2.roll());
console.log(Dice.prototype.isPrototypeOf(player1));