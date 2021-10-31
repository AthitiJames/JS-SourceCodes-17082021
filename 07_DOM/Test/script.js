let product = {
    productId: 'p001',
    productName: 'Dell Notebook',
    productDesc: 'monitor 15 inches, latitude 5500',
    price: 35000
  };
  
  //1. query div of products as reference node
  const divProductsEle = document.querySelector('#products');
  console.log(divProductsEle);
  
  //2. create div of product element
  // <div id="P001"></div>
  const divProductEle = document.createElement('div');
  divProductEle.setAttribute('id', product.productId);
  console.log(divProductEle);
  
  // 3. create p of product id element
  // <p>Product Id: P001</p>
  const pProductIdEle = document.createElement('p');
  pProductIdEle.setAttribute('stlye', )
  pProductIdEle.textContent = 'Product Id: ' + product.productId;
  
  //4. add <p> product id to div of product
  /* <div id="P001">  <p>Product Id: P001</p></div> */
  divProductEle.appendChild(pProductIdEle);

  //5. create p of product name element
  // <p>Product Name: Dell Notbook</p>
  const pProductNameEle = document.createElement('p');
  pProductNameEle.textContent = 'Product Name: ' + product.productName;

  //6. add <p> product name to div of product
  divProductsEle.appendChild(pProductNameEle);
  console.log(pProductNameEle);

  //7. create p of product price element
  //<p>price: 35000</p>
  