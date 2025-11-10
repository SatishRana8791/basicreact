import React from "react";

const Header=()=> {
  console.log("hi!");
  return (
    <div className="flex justify-between border border-blue-500 p-4 bg-orange-200 mb-10 ">
      <div className="flex items-center">
        <div className="mx-4 text-xl">About</div>
        <div className="mx-4 text-xl">Store</div>
      </div>
      <div className="flex items-center">
        <div className="mx-4 text-xl">Preferences</div>
        <i className="fa-solid fa-user text-2xl mx-4"></i>
      </div>
    </div>
  );
};

export default Header;
