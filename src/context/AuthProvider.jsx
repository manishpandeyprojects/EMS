import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setEmployeeData({ employees, admin });
  }, []);

  return (
    <>
      <AuthContext.Provider value={employeeData}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
