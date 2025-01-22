import { useContext, useEffect } from "react";
import Login from "../pages/Login";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  let { loggedinUser } = useContext(AuthContext);
  useEffect(() => {
    !Object.keys(loggedinUser).length && navigate("/login");
  }, []);
  return <>{children}</>;
}
