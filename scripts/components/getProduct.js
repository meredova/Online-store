import { PRODUCTS_API_URL } from "../api.js"
import { cardUI } from "./card.js"

const getProductById = async(id) => {
    try {
        let res = await fetch(PRODUCTS_API_URL+`/${id}`)
        let product = await res.json()
        cardUI.createCardUI(product)    
    }
    catch (e) {
        console.log('Error', e)
    }

    
    // fetch(PRODUCTS_API_URL+`/${id}`)
    //     .then(res => res.json())
    //     .then (data => data)
}

export { getProductById }