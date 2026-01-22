import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Hero = ({ filter }) => {
  const [data, setData] = useState([]);

  const getFoodData = async () => {
    try {
      let response = await axios.get(
        `http://192.168.29.22:8020/api/food/getFoodData?filter=${filter}`,
      );
      setData(response.data.result);
    } catch (error) {
      console.log("getFoodData api error:", error);
    }
  };

  useEffect(() => {
    getFoodData();
  }, [, filter]);

  return (
    // className="bg-[url(/bg.png)] h-[calc(100vh-270px)] bg-cover bg-center mt-[64px]"
    <section className="mt-[40px] bg-[url(/bg.png)] bg-cover bg-center h-[calc(100vh-184px)]">
      <div className="max-w-[1060px] mx-auto w-full grid grid-cols-3 justify-items-center gap-[20px] pt-[50px]">
        {data.map((v, i) => (
          <Card data={v} key={i} />
          // {/* {console.log(v)} */}
        ))}
      </div>
    </section>
  );
};

export default Hero;
