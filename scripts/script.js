import { select, productsCount } from "./DOM.js";
import { products } from "./components/Products.js"
import { categoryList } from "./components/CategoryList.js";
import { getProductsByCategory } from "./components/GetProductsByCategory.js";
import Router from "./components/Router.js";
import { getProductById } from "./components/getProduct.js";
import { showProductsFromBasket } from "./components/Basket.js";
import { getBasketCount } from "./components/getBasketCount.js";

select.addEventListener('change', function(){
    console.log('select', select.value)
    if (select.value === 'all') {
        products.getProducts()
    } else {
        getProductsByCategory(select.value)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    products.getProducts()
    categoryList.getCategories()
    if (localStorage.length > 0) {
        getBasketCount()
    } 

    productsCount.addEventListener('click', () => {
        showProductsFromBasket()
    })
})

const router = new Router() 

router.add(/card\/(.*)/, (id) => getProductById(id)) 