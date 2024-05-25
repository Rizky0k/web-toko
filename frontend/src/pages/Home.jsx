import { useState } from "react";
import { searchProduct } from "../api";
import "./Home.css";
import Card from "../components/Card";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(90);

  const search = async (q) => {
    const query = await searchProduct(q);
    setProducts(query.results);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Search search={search} />
      <p>Jumlah Product terhitung : {products.length}</p>
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
