import {bajarProducto, guardarProducto} from "./main.js";


// let cart = [];
// const bigContainer = document.querySelector('.bigContainerCart');
// const cardCart=document.getElementById('containerCart');
// let total=document.createElement('h3');
// let subtotal=0;

// let prod=bajarProducto("carrito")
// console.log(prod);
let cart=[];       
console.log(bajarProducto("carrito"));

bajarProducto("carrito").for(const prod of cart) {
    cart.push(prod)
}
// bajarProducto('carrito').forEach((element) => {
//     cart.push(element)
// });

console.log(cart);

const llenarCart = (prod)=>{
    return new Promise((resolve, reject) => {
        guardarProducto(prod, cart);
        cart.push(prod);
        console.log(cart);
    if (cart==undefined)reject("No hay productos en el carrito");
    else {resolve(cart)};
})
}
llenarCart(prod);

const containerCart=document.querySelector('.containerCart');
const imprimirCart = function (products){
    console.log(products);

    let codeCardCart=`        
            <article class="cardCart">
                <h6 class="prodBuyName">${products.title}</h6>
                <h6 class="prodBuyPrice">${products.price}</h6>
            </article>
            <article class="btnCart">
                <button class="btnAddProd">Agregar más productos</button>
                <button class="btnDeleteProd">Eliminar producto</button>
                <button class="btnFinBuy">Finalizar Compra</button>
            </article>        
        `
    containerCart.innerHTML+=codeCardCart;    
}
imprimirCart(prod);

const btnFinBuy = document.querySelector(".btnFinBuy");
btnFinBuy.addEventListener('click', ()=>{
    // alert("Desea finalizar la compra??")
    confirm("Está seguro de finalizar la compra?")
    if (confirm=true){
        containerCart.innerHTML="Gracias por su compra";
        alert("Gracias por su compra");
        return window.localStorage.clear();
    } else {
        window.location.assign("http://127.0.0.1:5500/index.html");
    }
})
const btnAddProd = document.querySelector(".btnAddProd");
btnAddProd.addEventListener('click', ()=>{
    guardarProducto(prod, cart);
    window.location.assign("http://127.0.0.1:5500/index.html");
})
const btnDeleteProd = document.querySelector(".btnDeleteProd");
btnDeleteProd.addEventListener("click", ()=>{
    alert("Esta seguro de eliminar producto?")
})
//falta funcion para agregar más productos o eliminarlos del cart
    


    
    // const cardCart = document.createElement("article")
    // const nombre = document.createElement("h3")
    // const imagen = document.createElement("img")
    // const precio = document.createElement("h4")
    // const description = document.createElement("h6");
    // const btnFinish=document.createElement('button')
    // nombre.innerHTML = products.title
    // imagen.src = products.image
    // precio.innerHTML = products.price
    // description.innerHTML= products.description;
    // btnFinish.innerHTML="Finalizar Compra";


    ///******************** */ 
    // containerCart.innerHTML+=`
    // <article class="cart" id="cart"> 
    // <h3 class="title">${products[i].title}</h3>
    // <img src="${products[i].image}" alt="${products[i].title}">
    // <h4 class="price">${products[i].price}</h4>
    // <button class="btnFinish" id="btnFinish-${products[i].id}" >Finalizar compra</button>
    // </article>
    // `    

//     containerCart.append(cardCart);
// }








