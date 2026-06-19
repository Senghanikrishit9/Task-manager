import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBroad from "./components/Dashbroad/EmployeeDashBroad";
import AdminDashbroad from "./components/Dashbroad/AdminDashbroad";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "krishit@gmial.com" && password == "123") {
      console.log("this is admin");
    } else if (email == "user.com" && password == "123") {
      console.log("this is user");
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    setLocalStorage();
  });
  useEffect(() => {
    getLocalStorage();
  });

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* <EmployeeDashBroad /> */}
      {/* <AdminDashbroad /> */}
    </>
  );
};

export default App;
