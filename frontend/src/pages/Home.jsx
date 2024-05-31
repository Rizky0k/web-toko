import { useState } from "react";
import { searchProduct } from "../api";
import "./Home.css";
import Card from "../components/Card";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(100);
  const [token] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const search = async (q) => {
    const query = await searchProduct(q);
    setProducts(query.results);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleInsert = () => {
    if (!token) {
      alert("silahkan login terlebih dahulu");
      navigate("/login");
    } else {
      navigate("/input-product");
    }
  };

  return (
    <>
      <Navbar />

      <Search search={search} />

      <div className="bg-atas">
        <p>Product : {products.length}</p>
        {!token ? (
          " "
        ) : (
          <button className="btn-insert" onClick={handleInsert}>
            +
          </button>
        )}
      </div>
      <div className="wrapper">
        <Card
          products={products}
          setProducts={setProducts}
          currentPage={currentPage}
          pageSize={pageSize}
          setTotalPages={setTotalPages}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        setTotalPages={setTotalPages}
        paginate={paginate}
        pageSize={pageSize}
      />
    </>
  );
}

export default Home;
