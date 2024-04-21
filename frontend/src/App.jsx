import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import InputProducts from "./pages/InputProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input-product" element={<InputProducts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
