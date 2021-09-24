let color = [
['ping', 'red'],
['yellow', 'orange', 'brown']
];

// console.log(color[color.length-1][color[color.length-1].length-1]);

let student = [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Peter'},
    {id: 3, name: 'Many'}
];

student[student.length-1].name = 'Athiti';
// console.log(student);

let student2 = [1, ...student, 100];
student2[1].name = `XYZ` ; 
console.log(student2[3].name);
console.log(student2);
console.log(student);

// let arr1 = [10, 'in progress', true, 1];

// console.log(arr1[0]); // [integer expression]
// console.log(arr1.length);
// console.log(arr1 [        arr1[  arr1.length-1    ]          ]  );