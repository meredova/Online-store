import { PRODUCTS_API_URL } from "../api.js"
import { ui } from "../components/UI.js"

class Products {
    getProducts = async() => {
        try {
            const response = await fetch(PRODUCTS_API_URL)
            const data = await response.json()
            ui.createProductsUI(data)
            // let productCard = document.querySelectorAll('.products-item')
            // productCard.forEach(product => product.addEventListener('click', () => {
            //     getProductById(product.id)
            // }))
        } catch (err) {
            console.log('Error', err.message)
        }
    }
}

let products = new Products() // экземпляр класса (когда мы создаем реальный наш класс в памяти через оператор NEW)

export { products }