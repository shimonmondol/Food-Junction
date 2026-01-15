import React from "react";

const Discount = () => {
  return (
    <div className="bg-[#F5F5F5] w-full">
      <div className="max-w-[1000px] w-full mx-auto px-4">

        {/* HEADING */}
        <div className="text-center">
          <p className="font-poppins font-medium text-xs text-[#FB9333] pt-20">
            MENU YANG MEMBUATMU JATUH CINTA
          </p>

          <h1 className="font-poppins font-medium text-2xl sm:text-3xl text-[#585858] pt-4 leading-snug">
            ENJOY THE BEST MENU AND GET <br />
            <span className="text-[#FB9333]"> DISCOUNTS</span> AVAILABLE
          </h1>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 gap-6 mt-10 pt-h-1/2 sm:gap-10 sm:grid-cols-2 lg:flex lg:justify-evenly">
          <img
            className="w-[300px] h-[350px] lg:w-[300px] lg:h-[350px] mx-auto"
            src="Images/Menu1.png"
            alt=""
          />
          <img
            className="w-[300px] h-[350px] lg:w-[300px] lg:h-[350px] mx-auto"
            src="Images/Menu2.png"
            alt=""
          />
          <img
            className="w-[300px] h-[350px] lg:w-[300px] lg:h-[350px] mx-auto"
            src="Images/Menu3.png"
            alt=""
          />

        </div>
      </div>
    </div>
  );
};

export default Discount;
