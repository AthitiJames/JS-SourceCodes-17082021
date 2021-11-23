// let promise = new Promise((resolve, reject) => {
//   // Code to perform the promised task
//   let task_performed = false;
//   if (task_performed) {
//     resolve('performed successfully');
//   } else {
//     reject('not performed');
//   }
// });
// promise.then((res) => console.log(res)).catch((rej) => console.log(rej));

// // 1. synchronous tasks
// // console.log(`hello `);
// // console.log(`world ,`);
// // console.log(`Good bye`);


// // 2. asynchronous tasks
// console.log(`hello `);
// let word = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`world, `);
//     resolve('success');
//   }, 7000);
// });

// word.then((returnWord) => {
//   console.log(`Good bye: ${returnWord}`);
// });

// -------------------------------------------------------
const friends = [
  {
    fullname: 'Paul Lee', Address: 'Bangkok, Thailand'
  },
  {
    fullname: 'Yoko Naree', Address: 'Kyoto, Japan'
  }
];

function getFullName(name, surname){
  return `${name} ${surname}`;
}

function getFriendName(name, surname, friendNameFN){
  // return friendNameFN(name, surname);
  return new Promise((resolved, rejected) => {
    const friendFullName = friendNameFN(name, surname)
    resolved(friendFullName);
  });
}
const fullName = getFriendName('Yoko', 'Naree', getFullName);
console.log(fullName);
