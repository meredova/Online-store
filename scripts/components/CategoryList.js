import { PRODUCTS_API_URL } from "../api.js"
import { select } from "../DOM.js"

class CategoryList {
    getCategories = async() => {
        try {
            const response = await fetch(PRODUCTS_API_URL + '/categories');
            const categories = await response.json()
            categories.forEach(category => {
                const option = document.createElement('option');
                option.innerHTML = category;
                select.appendChild(option)
            });
        } catch (error) {
            console.log('Error', error.message)
        }
    }
}

let categoryList = new CategoryList()

export { categoryList }