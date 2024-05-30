import { useState } from "react";
import "./UpdateProduct.css";
import { useLocation, useParams } from "react-router-dom";
import { putProduct } from "../api";

function UpdateProduct() {
  const location = useLocation();
  const { id } = useParams();
  const { product: initialProduct } = location.state;
  const [product, setProduct] = useState(initialProduct);
  const [token] = useState(localStorage.getItem("token"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await putProduct(token, id, product);
      alert("Update Sukses data telah dirubah");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Update Product</h1>
      {/* <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.price}</p> */}
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Nama Product</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="note">notes</label>
          <textarea
            type="text"
            name="note"
            id="note"
            value={product.note}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="save-btn">
          Save
        </button>
      </form>

      <a href="/">Back Home</a>
    </>
  );
}

export default UpdateProduct;
