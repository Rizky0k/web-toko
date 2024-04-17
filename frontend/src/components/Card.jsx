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
          <span>{product.category}</span>
          <h2>{product.name}</h2>
          <p>Rp.{product.price}</p>
          <hr/>
          <h3>Note:</h3>
          <p>{product.note}</p>
      </div>
    );
  });
}

export default Card;
