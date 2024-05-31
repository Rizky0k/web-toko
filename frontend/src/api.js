import axios from "axios";
// const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
// const apiUrl = "http://localhost:3000/product";
const apiUrl = "http://localhost:3000";

export const getProductList = async (currentPage, pageSize) => {
  const product = await axios.get(`${apiUrl}/product`, {
    params: {
      page: currentPage,
      pageSize,
    },
  });
  return product.data;
};

export const postProduct = async (token, data) => {
  const post = await axios.post(`${apiUrl}/product`, data, {
    headers: { authorization: `Bearer ${token}` },
  });
  return post.data;
};

export const putProduct = async (token, id, updatedData) => {
  const put = await axios.put(`${apiUrl}/product/${id}`, updatedData, {
    headers: { authorization: `Bearer ${token}` },
  });
  return put.data;
};

export const deleteProduct = async (token, id) => {
  const remove = await axios.delete(`${apiUrl}/product/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return remove.data;
};

export const searchProduct = async (q) => {
  // const searchProduct = await axios.get(`${apiUrl}?name=${q}`);
  const searchProduct = await axios.get(`${apiUrl}/product`, {
    params: {
      name: q,
    },
  });
  return searchProduct.data;
};

export const getUser = async (token) => {
  const product = await axios.get(`${apiUrl}/product`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return product.data;
};

export const loginUser = async (userData) => {
  const user = await axios.post(`${apiUrl}/user/login`, userData);
  return user.data;
};
