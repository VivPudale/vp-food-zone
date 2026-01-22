import React from "react";

const SearchFilters = ({ setFilter }) => {
  const buttons = ["All", "Breakfast", "Lunch", "Dinner"];

  const handleFunction = (v) => {
    setFilter(v);
  };

  return (
    <section className=" text-white text-[16px] flex flex-row gap-[14px] mt-[20px] justify-center">
      {buttons.map((v, i) => {
        return (
          <button
            className="px-[12px] py-[6px] bg-[#FF4343] rounded-[5px]"
            key={i}
            onClick={() => handleFunction(v)}
          >
            {v}
          </button>
        );
      })}
    </section>
  );
};

export default SearchFilters;
