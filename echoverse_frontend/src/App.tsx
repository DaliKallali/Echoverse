import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components";
import Home from "./container/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const User =
      storedUser && storedUser !== "undefined"
        ? JSON.parse(storedUser)
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
