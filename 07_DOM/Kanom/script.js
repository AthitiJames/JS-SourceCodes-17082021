// import ตัวแปรจากไฟล์ product.js เข้ามาใช้
import { macarone, brownie, muffin, moji } from "./product.js";
import { chackAndAdd, showCart } from "./cart.js";

// เอาตัวแปรที่ทำการ import มานำมาเก็บใน array kanom
const kanom = [macarone, brownie, muffin, moji];

// หา div id = products ด้วยคำสั่ง querySelector
const divProductsEle = document.querySelector("#products");

// ใช้ loop for in สำหรับเรียกค่าใน array มาแสดงผล
for (let index in kanom) {
  // สร้าง element div เพื่อกำหนด div แต่ละตัวให้มี class เป็นของตัวเอง
  const divKanomEle = document.createElement("div");
  // setAttribute เพื่อกำหนด id ของ div ให้เป็นของขนมที่เก็บ
  divKanomEle.setAttribute("id", kanom[index].productId);
  // appendChild สำหรับการแทรก div id ขนมต่่าง ๆ ไปเก็บไว้ใน div id = products
  divProductsEle.appendChild(divKanomEle);

  // สร้าง element p และแสดงผล Kanom Name ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomNameEle = document.createElement("p");
  kKanomNameEle.className = `card-header`;
  kKanomNameEle.textContent = kanom[index].productName;
  divKanomEle.appendChild(kKanomNameEle);

  // แสดงผลรูปขนม มีการสร้าง element img
  const kKanomImgEle = document.createElement("img");
  // src สำหรับ set path ของรูปภาพขนมนั้น ๆ
  kKanomImgEle.src = `${kanom[index].img}`;
  // classname สำหรับกำหนดชื่อรูป
  kKanomImgEle.className = `photoKanom`;
  // appendChild สำหรับการแทรก kKanomImgEle ไปใส่ใน divKanomEle และสร้าง element br
  divKanomEle.appendChild(kKanomImgEle);
  divKanomEle.appendChild(document.createElement("br"));

  // สร้าง element p และแสดงผล Kanom Id ก่อนจะนำไปแทรกใน divKanomEle
  // const kKanomIdEle = document.createElement("p");
  // kKanomIdEle.textContent = "Kanom Id: " + kanom[index].productId;
  // divKanomEle.appendChild(kKanomIdEle);

  // สร้าง element p และแสดงผล Price ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomPriceEle = document.createElement("p");
  kKanomPriceEle.className = `card-title`;
  kKanomPriceEle.textContent = "Price: " + kanom[index].price;
  divKanomEle.appendChild(kKanomPriceEle);

  // สร้าง element p และแสดงผล AmountProducts ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomAmountProductsEle = document.createElement("p");
  kKanomAmountProductsEle.className = `card-text`;
  kKanomAmountProductsEle.textContent =
    "AmountProducts: " + kanom[index].amountProducts;
  divKanomEle.appendChild(kKanomAmountProductsEle);

  // สร้าง element button เป็นปุ่ม add ก่อนจะนำไปแทรกใน divKanomEle
  const kKanomButtonEle = document.createElement("button");
  kKanomButtonEle.textContent = "Add";
  divKanomEle.appendChild(kKanomButtonEle);
}
// querySelector ปุ่ม ตะกร้าจากหน้า index มา จากนั้นก็ดักจับ event เมื่อกดปุ่มให้เรียกใช้งานฟังก์ขัน showCart() มาทำงาน
const basketBtn = document.querySelector("#basket");
basketBtn.addEventListener('click', () => {
  showCart();
});

function changAmount(indexKanom, idKanom){
  if(kanom[indexKanom].amountProducts == 0){
    alert(`Out Of Stock`);
    return false;
  } else{
      kanom[indexKanom].amountProducts--;
      const kKanomAmountP = document.querySelector(idKanom + " .card-text");
      kKanomAmountP.textContent = "AmountProducts: " + kanom[indexKanom].amountProducts;
      return true;
      }
  
  
  }

// querySelector ปุ่ม add ของขนมแต่ละอย่างจากหน้า index มา จากนั้นก็ดักจับ event เมื่อกดปุ่มให้เรียกใช้งานฟังก์ขัน chackAndAdd() มาทำงาน
//เพื่อเช็คว่าขนมมีอยู่ในตะกร้าอยู่ไหม ถ้าไม่มีก็ add ขนมเข้าไปเก็บไว้ใน productInCart แต่ถ้ามีให้เพิ่ม amount +1 หลังจากนั้นใช้ alert แสดงขนมที่ add เข้าไป
const addMCRBtn = document.querySelector("#KN001 button");
addMCRBtn.addEventListener('click', () => {
  // changAmount(0, "#KN001");
  if(changAmount(0, "#KN001")){
    chackAndAdd(macarone.productId, macarone.productName, macarone.price);
    alert(`Add Kanom: ${macarone.productId} Success!!!`);
  }
  
});

const addBNBtn = document.querySelector("#KN002 button");
addBNBtn.addEventListener('click', () => {
  chackAndAdd(brownie.productId, brownie.productName, brownie.price);
  alert(`Add Kanom: ${brownie.productId} Success!!!`);
});
//  
const addMRBtn = document.querySelector("#KN003 button");
addMRBtn.addEventListener('click', () => {
  chackAndAdd(muffin.productId, muffin.productName, muffin.price);
  alert(`Add Kanom: ${muffin.productId} Success!!!`);
});
//  
const addMJtn = document.querySelector("#KN004 button");
addMJtn.addEventListener('click', () => {
  chackAndAdd(moji.productId, moji.productName, moji.price);
  alert(`Add Kanom: $moji.productId} Success!!!`);
});


// ----------------------------------------------------------------------------- //
//เพิ่ม event click เพื่อจะแสดง searchBar
const search = document.querySelector("#searchButton");
search.addEventListener("click", (e) => {
  e.preventDefault();
  const searchBar = document.querySelector("#inputForm"); //ให้แสดงปุ่มsearchBarขึ้นมา

  //ถ้า searchBar มี class ชื่อ hidden ให้ลบ hidden ออก ถ้าไม่มีให้เพิ่ม
  if (searchBar.classList.contains("d-none")) {
    searchBar.classList.remove("d-none");
    //ทำการ insearch
  } else {
    searchBar.classList.add("d-none");
  }
});

/*
//Function for adding product---------------------
function addProductToCart(event){
  let Pid = event.target.id
  let exist = false;
  if(cart.length==0){ //ของชิ้นแรก เพิ่มแน่นอน
      cart.push([Pid,1])
  }
  else{
      for(let c of cart){ //เช็คว่า id นี้มีในตะกร้าแล้วหรือยัง
          if(Pid==c[0]){ // ถ้ามี เพิ่มจำนวน
              c[1] +=1;
              exist = true
          }
      }
      if(exist==false){// ถ้าไม่มี ให้เพิ่มเป็นของใหม่ในตะกร้า
          cart.push([Pid,1]);
      }
  }
  console.log(cart)

  alert("add product " + Pid + "to your cart")
  numProductInCart();
}
*/