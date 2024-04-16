import axios from "axios"

// eslint-disable-next-line no-undef
const apiUrl = 'http://localhost:3456/'

export const getProductList = async () => {
    const product = await axios.get(apiUrl)
    return product.data
}

export const searchProduct = async (q) => {
    const searchProduct = await axios.get(`${apiUrl}search?name=${q}`)
    return searchProduct
}