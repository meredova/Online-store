import { productsDOM } from '../DOM.js'
import { getBasketCount } from './getBasketCount.js'

class CardUI {

    createCardUI(product) {
        productsDOM.innerHTML = ' '
        productsDOM.innerHTML = `
            <div class='product-card'>
                <a href = '/'> На главную</a>
                <div class='product-title'>${product.title}</div>
                <div class='product-description'>${product.description}</div>
                <img class='product-image' src=${product.image} alt='product-image'>
                <div class='product-price'>${product.price} $</div>
                <div class='btn-product-container'>
                    <div class='add-product'>+</div>
                    <div class='delete-product'>-</div>
                </div>
            </div>
        `

        // let count = 0

        let addProducts = document.querySelector('.add-product')
        addProducts.addEventListener('click', () => {
            // localStorage.setItem(product.id, JSON.stringify({count: count+=1, title: product.title, image: product.image, price: product.price }))

            let currentProduct = JSON.parse(localStorage.getItem(product.id))
            console.log('Current product', currentProduct)
            if(currentProduct) {
                localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count +=1, title: product.title, image: product.image, price: product.price}))
            } else {
                let count = 0
                localStorage.setItem(product.id, JSON.stringify({count: count+=1, title: product.title,image: product.image, price: product.price}))
            }
            getBasketCount()
        })

        let deleteProducts = document.querySelector('.delete-product')
        deleteProducts.addEventListener('click',() => {
            let currentProduct = JSON.parse(localStorage.getItem(product.id))
            if (currentProduct.count > 0) 
                localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count-=1, title:product.title, image: product.image, price: product.price }))
            if (currentProduct.count < 1)
            localStorage.removeItem(product.id)
            getBasketCount()
        })

    }
}

let cardUI = new CardUI()

export { cardUI }