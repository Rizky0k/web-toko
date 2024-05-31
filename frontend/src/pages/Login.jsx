import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };

    try {
      const data = await loginUser(user);

      if (data.error) {
        alert(data.error);
      } else {
        localStorage.setItem("token", data.token);
        alert(`Hello ${data.result.name} welcome to your store`);
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan Username . . ."
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            required
          />
        </div>
        <button type="submit" className="save-btn">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
