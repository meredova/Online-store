import { productsCount } from "../DOM.js";

const getBasketCount = () => {
    let sum = 0;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let productObj = JSON.parse(localStorage.getItem(key))

        sum += +productObj.count
        productsCount.innerHTML = sum
    }
}
export { getBasketCount }