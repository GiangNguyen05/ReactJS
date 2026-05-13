import { useState } from "react";
import "../Styles/TwoBinding.css";
export default function TwoBinding() {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const [enterLogin, setEnterLogin] = useState(false);
  function handleLogin(e) {
    e.preventDefault();
    setEnterLogin(true);
  }
  const passNotValid = enterLogin && user.password.trim().length < 6;
  const emailNotValid = enterLogin && !user.email.includes("@gmail.com");
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  }

  return (
    <>
      <form className="wrap" onSubmit={handleLogin}>
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
              className={`${passNotValid ? "invalid" : ""}`}
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          {passNotValid && <p>Mật khẩu phải ít nhất 6 kí tự</p>}
          <div className="email-input">
            <label htmlFor="email">Nhập email:</label>
            <input
              className={`${emailNotValid ? "invalid" : ""}`}
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          {emailNotValid && <p>Email phải có dấu @gmail.com</p>}
          <button type="submit">Login</button>
        </div>
        <div className="result">
          <h3>Tên: {user.username}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      </form>
    </>
  );
}
