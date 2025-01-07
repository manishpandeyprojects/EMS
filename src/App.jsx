import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const loggedInUser_ = JSON.parse(loggedInUser);
      if (loggedInUser_) {
        setUser(loggedInUser_.role);
        setLoggedInUserData(loggedInUser_.data);
      }
    }
  }, []);

  const checkAuth = (e) => {
    // console.log(e.role);
    if (e.role === "admin") {
      const filterData = authData.admin.find(
        (emp) => emp.email === e.email && emp.password === e.password
      );
      return filterData;
    }
    if (e.role === "employee") {
      const filterData = authData.employees.find(
        (emp) => emp.email === e.email && emp.password === e.password
      );
      return filterData;
    }
  };

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = checkAuth({
        email: email,
        password: password,
        role: "admin",
      });
      const employee = checkAuth({
        email: email,
        password: password,
        role: "employee",
      });

      if (admin) {
        setUser("admin");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin })
        );
        setLoggedInUserData(admin);
      }

      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        setLoggedInUserData(employee);
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
