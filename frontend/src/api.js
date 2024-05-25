import axios from "axios";
const apiUrl = "https://web-toko-api.vercel.app/product";
// const apiUrl = "http://localhost:3000/product";
// const apiUrl = "http://localhost:3000/product/";

export const getProductList = async (currentPage, pageSize) => {
  const product = await axios.get(apiUrl, {
    params: {
      page: currentPage,
      pageSize,
    },
  });
  return product.data;
};

export const searchProduct = async (q) => {
  // const searchProduct = await axios.get(`${apiUrl}?name=${q}`);
  const searchProduct = await axios.get(`${apiUrl}/search`, {
    params: {
      name: q,
    },
  });
  return searchProduct.data;
};
