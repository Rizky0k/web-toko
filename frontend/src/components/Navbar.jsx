import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("token"));
  const handleLogOut = () => {
    if (token) {
      localStorage.removeItem("token");
      location.reload();
    }
  };
  const handleLogIn = () => {
    navigate("login");
  };
  return (
    <>
      <nav>
        {!token ? (
          <button className="nav-btn" id="atas" onClick={handleLogIn}>
            Login
          </button>
        ) : (
          <button className="nav-btn" onClick={handleLogOut}>
            Logout
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
