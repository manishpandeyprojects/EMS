import React, { useState } from "react";

const Header = ({ data, dashboardName, handleLogout }) => {
  return (
    <div className="flex items-center justify-between p-10 sticky top-0 bg-black border-b-[1px]">
      <div className="font-semibold text-3xl">
        Hello
        <br />
        <span className="font-bold">
          {" "}
          {data.firstname ? data.firstname : "admin"} 👋
        </span>
      </div>

      {dashboardName && <h1 className="text-4xl font-bold">{dashboardName}</h1>}

      <div
        className="cursor-pointer bg-red-600 text-lg text-white rounded-sm p-1 px-4 font-semibold"
        onClick={() => handleLogout()}
      >
        Log Out
      </div>
    </div>
  );
};

export default Header;
