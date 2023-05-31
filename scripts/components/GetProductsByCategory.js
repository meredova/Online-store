import { PRODUCTS_API_URL } from "../api.js"
import { ui } from "./UI.js"

const getProductsByCategory = async (selectValue) => {
    try {
        const response = await fetch(`${PRODUCTS_API_URL}/category/${selectValue}`)
        const data = await response.json()
        ui.createProductsUI(data)
        // let productCard = document.querySelectorAll('.products-item')
        //     productCard.forEach(product => product.addEventListener('click', () => {
        //         getProductById(product.id)
        //     }))
    } catch(error) {
        console.log('Error', error.message)
    }
}

export { getProductsByCategory}