import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBroad from "./components/Dashbroad/EmployeeDashBroad";
import AdminDashbroad from "./components/Dashbroad/AdminDashbroad";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == "krishit@gmail.com" && password == "123") {
      setUser("admin");
    } else if (AuthData) {
      const employee = AuthData.employees.find(
        (e) => email == e.email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
      }
    } else {
      alert("Invalid credentials");
    }
  };

  // useEffect(() => {
  //   setLocalStorage();
  // });
  // useEffect(() => {
  //   getLocalStorage();
  // });

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashbroad /> :(user == 'employee' ? <EmployeeDashBroad  data = {loggedInUserData} /> : null)}
      {/* <EmployeeDashBroad /> */}
      {/* <AdminDashbroad /> */}
    </>
  );
};

export default App;
