let num1=10;
let num2=20;
num2=num1; //num1 assigns value(10) to num2
num2=55;

console.log(num1); //10
console.log(num2);//55

//#2
let std1 = {
  id: 1,
  name:"Susan"
};
let std2 = {
  id:2,
  name:"Jhon"
};
std2=std1; //std1 assigns value(memory address) points to the same memory address
std2.name="Peter";

console.log(std1); //id:1, name:"Susan"
console.log(std2); //id:1, name:"Peter"

console.log(num1===num2); //false ? primitive value are comared //primitive  เวลาชี้จะไม่ได้ชี้ address แต่คือการ assigns ค่า
console.log(std1===std2); //true ? memory address are compred

//#3
function doSomething1(student){ //student is formal parameter //student = std3 //formal จะเป็นจำพวก obj เวลา = มันคือการส่ง address ไม่ใช่การส่งเทียบค่า
  student.id = 635000111;
}
let std3 = {
  id: 3,
  name:"Joe"
};

dosomething1(std3); //std3 is an actual parameter
console.log(std3); //id: 3, name:"Joe"

function doSomething2(num){
  num=555;
}
let num3 = 1;
doSomething2(num3);
console.log(num3); //num:1