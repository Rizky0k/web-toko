/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Card.css";
import { deleteProduct, getProductList } from "../api";
import { useNavigate } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";

function Card({ products, setProducts, setTotalPages, currentPage, pageSize }) {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductList(currentPage, pageSize).then((result) => {
      setProducts(result.results);
      setTotalPages(result.totalPages);
      setIsLoading(false);
    });
  }, [setProducts, currentPage, setTotalPages, pageSize]);

  const deleteHandler = async (product) => {
    try {
      if (confirm("beneran nih?") == true) {
        await deleteProduct(token, product._id);
        alert(`${product.name} akan dihapus`);
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = (product) => {
    navigate(`/update-product/${product._id}`, { state: { product } });
  };

  return (
    <>
      {isLoading && <CardSkeleton counts={20} />}
      {products.map((product, i) => (
        <div className="card-container" key={i}>
          <span>{product.category}</span>
          <h2>{product.name}</h2>
          <p>Rp.{product.price}</p>
          <hr />
          <h3>Note:</h3>
          <p>{product.note}</p>
          {!token ? (
            " "
          ) : (
            <div className="btn">
              <a className="update-btn" onClick={() => updateHandler(product)}>
                Update
              </a>
              <a className="delete-btn" onClick={() => deleteHandler(product)}>
                Delete
              </a>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Card;
