import React, { useState } from "react";

const Header = ({ data }) => {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between p-10">
      <div className="font-semibold text-3xl">
        Hello <br />
        <span className="font-bold">
          {" "}
          {data.firstname ? data.firstname : "admin"} 👋
        </span>
      </div>

      <div
        className="cursor-pointer bg-red-600 text-lg text-white rounded-md p-1 px-4 font-semibold"
        onClick={() => handleLogout()}
      >
        Log Out
      </div>
    </div>
  );
};

export default Header;
