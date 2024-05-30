import { useState } from "react";
import { postProduct } from "../api";
import "./InputProduct.css";

const InputProducts = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize] = useState(90);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [token] = useState(localStorage.getItem("token"));

  const handleCategoryChange = (e) => {
    setCategory(e.target.value.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, category, note };

    try {
      const data = await postProduct(token, product);
      if (data.message) {
        alert("Silahkan Login terlebih dahulu");
        throw new Error(data.message);
      } else {
        console.log("Success", data);
      }
      // location.reload();
    } catch (error) {
      console.error("Failed: ", error);
    }
  };

  return (
    <>
      <a href="/">Link Here</a>
      <h1>Input Data Product</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="product">Nama Product</label>
          <input
            type="text"
            name="product"
            id="product"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan Produk Baru"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            placeholder="Category Product"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price Product"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="note">notes</label>
          <textarea
            type="text"
            name="note"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Product Notes"
          />
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default InputProducts;
