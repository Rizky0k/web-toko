import axios from "axios"

export const getProductList = async () => {
    const product = await axios.get(`http://localhost:3456/`)
    return product.data
}

export const searchProduct = async () => {
    const searchProduct = await axios.get(``)
    console.log(searchProduct);
}