// function outer(base, height, side){
//     let triangle=[];
//     triangle.unshift(base, height, side);
//     console.log(triangle);

//     function circumference(){
//         return triangle[0] + triangle[1] + triangle[2];
//     }
// }


// // function outer(...triangle){
// //     console.log(triangle);

// //     function circumference(){
// //         return triangle[0];
// //     }

// //     return circumference;
// // }

// let c = outer(3, 4, 5);
// console.log(c(circumference));




// Higher Order Function รับ parameter ที่เป็น function
function menu() {
    const menu = `
MENU
1: หาพื้นที่รูปสี่เหลี่ยมผืนผ้า
2: หาความยาวรอบรูปสี่เหลี่ยมผืนผ้า`;
    return menu;
}

function findArea(fLength, fWidth) {
    let area = fLength * fWidth;
    return `Area = ${area}`;
}

function findPerimeter(fLength, fWidth) {
    let perimeter = 2 * (fLength + fWidth);
    return `Perimeter = ${perimeter}`;
}

function calculate(name = 'unknown', ...num){
    let userName = name ;
    let fLength = num[0];
    let fWidth = num[1];

    function chooseMenu(cm = 0){

        function show(fn) {
            let x =`Menu ที่เลือก: ${cm}
        User: ${userName}
        length: ${fLength}
        width: ${fWidth}
        ${fn(fLength, fWidth)}`;
        return  x;
        }

        console.log(menu());
        switch (cm) {
            case 0:
                return `ไม่มีการเลือกmenu กรุณาเลือกmenu`;
            case 1:
                return show(findArea);
            case 2:
                return show(findPerimeter);
        }
    }
    
    return chooseMenu;
}

let triangle = calculate("a", 4, 2);
console.log(triangle()) ;
console.log(triangle(2));

// triangle(4, 2, 2);


