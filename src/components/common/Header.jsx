import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between p-10">
      <div className="font-semibold text-3xl">
        Hello <br />
        <span className="font-bold"> Manish 👋</span>
      </div>

      <div className="bg-red-600 text-lg text-white rounded-md p-1 px-4 font-semibold">
        Log Out
      </div>
    </div>
  );
};

export default Header;
