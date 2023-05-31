import { productsDOM } from "../DOM.js"

class UI {
    createProductsUI = (responseData) => {
        productsDOM.innerHTML = ' '
        responseData.forEach(
            (product) => 
            (productsDOM.innerHTML += `
                <div class='products-item' id=${product.id}>
                    <div class='products-title'>${product.title}</div>
                    <div><img class='products-photo' src=${product.image} alt = 'product item'></div>
                    <div class='products-price'>${product.price} $</div>
                    <a href='#/card/${product.id}' class='show-more'>Подробнее</a>
                </div>`
            )
        )
    }
}

let ui = new UI()

export { ui }