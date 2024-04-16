import { useEffect } from "react";
import "./Card.css";
import { getProductList } from "../api";

function Card({ products, setProducts }) {
  useEffect(() => {
    getProductList().then((result) => {
      setProducts(result);
    });
  }, [setProducts]);

  return products.map((product, i) => {
    return (
      <div className="card-container" key={i}>
        <div className="card-content">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      </div>
    );
  });
}

export default Card;
