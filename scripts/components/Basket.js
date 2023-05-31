import { productsDOM } from "../DOM.js";

const showProductsFromBasket = () => {
    productsDOM.innerHTML = ' '
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let product = JSON.parse(localStorage.getItem(key))
        productsDOM.innerHTML += `
        <div class='products-item' id=${key}>
            <div class='products-title'>${product.title}</div>
            <div><img class='products-photo' src=${product.image} alt = 'product item'></div>
            <div class='products-count'>Количество: ${product.count}</div>
            <div class='products-price'>${product.price} $</div>
            <a href='#/card/${key}' class='show-more'>Подробнее</a>
        </div>
        `

    }
    // for (let i = 0; i < localStorage.length; i++) {
    //     let id = localStorage.key(i)
    //     let productData = JSON.parse(localStorage.getItem(id))
    //     productsDOM.innerHTML +=
    //     `
    //     <div>
    //         <h2>${productData.title}</h2>
    //         <div>Количество: ${productData.count}</div>
    //     </div>
    //     `
    // }
}

export { showProductsFromBasket }