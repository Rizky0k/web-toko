import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import InputProducts from "./pages/InputProduct";
import Login from "./pages/Login";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input-product" element={<InputProducts />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
