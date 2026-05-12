import { useState } from "react";
import "../Styles/TwoBinding.css";
export default function TwoBinding() {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  }
  return (
    <>
      <div className="wrap">
        <div className="form">
          <h2>Login</h2>
          <div className="name">
            <label htmlFor="username">Nhập tên:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div className="pass">
            <label htmlFor="password">Nhập pass:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="email-input">
            <label htmlFor="email">Nhập email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </div>
        <div className="result">
          <h3>Tên: {user.username}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      </div>
    </>
  );
}
