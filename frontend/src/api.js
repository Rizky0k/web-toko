import axios from "axios";
const apiUrl = "https://glamorous-cyan-raincoat.cyclic.app/";
// const apiUrl = "http://localhost:3000/";

export const getProductList = async () => {
  const product = await axios.get(apiUrl);
  return product.data.results;
};

export const searchProduct = async (q) => {
  const searchProduct = await axios.get(`${apiUrl}search?name=${q}`);
  return searchProduct.data;
};
