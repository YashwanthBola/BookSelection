import { use, useContext, useState } from "react";
import user from "../data/user.json";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  let { login } = useContext(AuthContext);
  let [loginDetails, setLoginDetails] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
    console.log(loginDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let matchingUser = user.filter(
      (user) =>
        user.username == loginDetails.username &&
        user.password == loginDetails.password
    );
    if (matchingUser.length != 0) {
      login(loginDetails.username);
    } else {
      alert("invalid login");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="nb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="nb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
