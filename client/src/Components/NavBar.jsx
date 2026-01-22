import React from "react";
import SearchFilters from "./SearchFilters";

const NavBar = () => {
  return (
    <div className="max-w-[1200px] mx-auto  flex justify-between text-white mt-[40px]">
      <h1 className="font-bold text-[32px]">VP-FoodZone</h1>
      <button className=" text-[16px] py-[10px] pl-[15px] pr-[157px] bg-transparent border-[1px] border-[#FF0909] rounded-[5px]">
        Search....
      </button>
    </div>
  );
};

export default NavBar;
