import { useState } from "react";
import { searchProduct } from "../api";
import "./Home.css";
import Card from "../components/Card";
import Search from "../components/Search";

function Home() {
  const [products, setProducts] = useState([]);

  const search = async (q) => {
    const query = await searchProduct(q);
    setProducts(query.results);
  };
  return (
    <>
      <Search search={search} />
      <p>Jumlah Product terhitung : {products.length}</p>
      <div className="wrapper">
        <Card products={products} setProducts={setProducts} />
      </div>
    </>
  );
}

export default Home;
