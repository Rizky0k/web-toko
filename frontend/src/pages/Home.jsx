import { useState } from "react";
import { searchProduct } from "../api";
import "./Home.css";
import Card from "../components/Card";
import Search from "../components/Search";

function Home() {
  const [products, setProducts] = useState([]);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchProduct(q);
      setProducts(query.data);
    }
  };
  return (
    <>
      <Search search={search} />
      <div className="wrapper">
        <Card products={products} setProducts={setProducts} />
      </div>
    </>
  );
}

export default Home;
