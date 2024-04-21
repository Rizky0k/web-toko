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
    const dateCreate = product.created_at.slice(0, 10);
    const hoursCreate = product.created_at.slice(12, 16);
    const createAtToString = `${hoursCreate} | ${dateCreate}`;

    return (
      <div className="card-container" key={i}>
        <span>{product.category}</span>
        <h2>{product.name}</h2>
        <p>Rp.{product.price}</p>
        <hr />
        <h3>Note:</h3>
        <p>{product.note}</p>
        <small>
          {" "}
          Latest Update : <br /> {createAtToString}
        </small>
      </div>
    );
  });
}

export default Card;
