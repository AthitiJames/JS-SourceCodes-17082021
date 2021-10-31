import {
    macarone, 
    brownie, 
    muffin, 
    moji
  } from './product.js';

const kanom = [
        macarone,
        brownie,
        muffin,
        moji
]

const divProductsEle = document.querySelector('#products');

for(let index in kanom){
    const divKanomEle = document.createElement('div');
    divKanomEle.setAttribute('id', kanom[index].productId);
    // console.log(divKanomEle);

    const kKanomIdEle = document.createElement('p');
    kKanomIdEle.textContent = 'Kanom Id: ' + kanom[index].productId;
    // console.log(kKanomIdEle);
    divProductsEle.appendChild(kKanomIdEle);

    const kKanomNameEle = document.createElement('p');
    kKanomNameEle.textContent = 'Kanom Name: ' + kanom[index].productName;
    // console.log(kKanomNameEle);
    divProductsEle.appendChild(kKanomNameEle);

    const kKanomPriceEle = document.createElement('p');
    kKanomPriceEle.textContent = 'Price: ' + kanom[index].price;
    // console.log(kKanomPriceEle);
    divProductsEle.appendChild(kKanomPriceEle);

    const kKanomAmountProductsEle = document.createElement('p');
    kKanomAmountProductsEle.textContent = 'AmountProducts: ' + kanom[index].amountProducts;
    // console.log(kKanomAmountProductsEle);
    divProductsEle.appendChild(kKanomAmountProductsEle);
}









// const divKanomEle = document.createElement('div');
// divProductEle.setAttribute('id', macarone.productId);

// const kKanomIdEle = document.createElement('p');
// kKanomIdEle.textContent = 'Kanom Id: ' + macarone.productId;

// const kKanomNameEle = document.createElement('p');
// kKanomNameEle.textContent = 'Kanom Name: ' + macarone.productName

// const kKanomNameEle = document.createElement('p');