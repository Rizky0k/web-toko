import { useEffect, useState } from "react";
import "./Card.css";
import { deleteProduct, getProductList } from "../api";
import { useNavigate } from "react-router-dom";

function Card({ products, setProducts, setTotalPages, currentPage, pageSize }) {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    getProductList(currentPage, pageSize).then((result) => {
      setProducts(result.results);
      setTotalPages(result.totalPages);
    });
  }, [setProducts, currentPage, setTotalPages, pageSize]);

  const deleteHandler = async (product) => {
    try {
      if (confirm("beneran nih?") == true) {
        await deleteProduct(token, product._id);
        alert(
          `data ${product.name} dengan ID ${product._id} akan dihapus mas hehe`
        );
        location.reload();
      } else {
        alert("belum dihapus");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = (product) => {
    navigate(`/update-product/${product._id}`, { state: { product } });
    alert(`ini nama cardnya ${product.name}, ini idnya ${product._id}`);
  };

  return products.map((product, i) => {
    // const dateCreate = product.created_at.slice(0, 10);
    // const hoursCreate = product.created_at.slice(12, 16);
    // const createAtToString = `${hoursCreate} | ${dateCreate}`;

    return (
      <div className="card-container" key={i}>
        <span>{product.category}</span>
        <h2>{product.name}</h2>
        <p>Rp.{product.price}</p>
        <hr />
        <h3>Note:</h3>
        <p>{product.note}</p>
        {/* <small>
          {" "}
          Latest Update : <br /> {createAtToString}
        </small> */}
        {!token ? (
          " "
        ) : (
          <div className="btn">
            <a
              className="update-btn"
              onClick={() => updateHandler(product)}
              // href="/update-product"
            >
              Update
            </a>
            <a className="delete-btn" onClick={() => deleteHandler(product)}>
              Delete
            </a>
          </div>
        )}

        {/*  */}
      </div>
    );
  });
}

export default Card;
