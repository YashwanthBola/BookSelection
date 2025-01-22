import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  let existingData = localStorage.getItem("loggedinUser");
  let [loggedinUser, setLoggedinUser] = useState(
    existingData ? { username: existingData } : {}
  );

  const login = (username) => {
    setLoggedinUser({ username });
    localStorage.setItem("loggedinUser", username);
    navigate("/");
  };

  const logOut = () => {
    console.log("logOut");
    setLoggedinUser({});
    localStorage.removeItem("loggedinUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ loggedinUser, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
