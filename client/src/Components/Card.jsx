import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex gap-[17px] px-[10px] py-[18px] justify-between text-white rounded-[20px] bg-[#3E2F2C] border-[#98D8DC] border-[0.1px]">
      <img src={data.image} alt={`${data.name}-Image`} />
      <div className="flex flex-col gap-[26px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px] font-semibold">{data.name}</p>
          <p className="text-[12px]">{data.text}</p>
        </div>
        <div className="flex gap-[15px] justify-end">
          <button className="px-[6px] py-[4px] text-[14px] w-[50px] font-semibold bg-[#FF4343] rounded-[5px]">
            ₹{data.price}
          </button>
          <button className="px-[6px] py-[4px] text-[14px] w-[50px] font-semibold  bg-[#FF4343] rounded-[5px] ">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
