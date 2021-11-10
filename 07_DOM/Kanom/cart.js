let productInCart = [];

//function chackAndAdd() 
export function chackAndAdd(kanomId, kanom, price) {
    for (let product of productInCart) {
        if (product[1] === kanom) {
            product[3] = product[3] + 1;
          return;
        }
      }
    
      productInCart.push([kanomId, kanom, price, 1]);

}

function totleAmount(){
    let totle = 0 ;
    for (let p of productInCart) {
        totle = totle + (p[2] * p[3]) ;    
    }
    return totle;
}

// function showCart() 
export function showCart() {
    let popup = `Cart:`; 
    productInCart.forEach(pro => {
        popup = popup +
        `
        {Kanom : ${pro[1]} , Price : ${pro[2]} , Amount : ${pro[3]}}`
    });
    
    alert(popup + 
        `
        Totle : ${totleAmount()}`);

}

