import React from "react";

const Choose = () => {
  return (
    <div className="bg-white w-[1000px] mx-auto mt-20 justify-between px-2">
      <div className="flex justify-between">
        <div className="w-[500px]">
          <h1 className="font-poppins font-bold text-3xl text-[#585858]">
            WHY CHOOSE US <br />{" "}
            <span className="text-[#FB9333] mt-2 block">FOR YOUR HEALTHY FOOD</span>
          </h1>
        </div>
        <div className="w-[500px] mt-2">
          <h1 className="font-poppins font-medium text-sm text-justify text-[#828282]">
            We continue to consistently choose and maintain the quality
            of the fruit served, so that it remains fresh and nutritious
            when you eat it.
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div class="box-content w-48 h-64 p-4 border-2 border-orange-50 rounded-2xl mt-12">
          <img className="w-20 h-20" src="Images/Choose2.png" alt="" />
          <h1 className="font-poppins font-bold text-[#2B2B2B] mt-8">
            #1 Healthy Fruit Salad
          </h1>
          <p className="font-poppins text-justify text-xs text-[#575757] mt-2">
            The pioneer of healthy fruit salads that are delicious & suitable
            with the best quality assurance.
          </p>
          <div>
            <img className="h-8 mt-6 w-28" src="Images/Frame 11.png" alt="" />
          </div>
        </div>
        <div class="box-content bg-amber-100 w-48 h-64 p-4 border-2 border-orange-50 rounded-2xl mt-12">
          <img className="w-20 h-20" src="Images/Choose1.png" alt="" />
          <h1 className="font-poppins font-bold text-[#2B2B2B] mt-8">
            Own fruit orchard
          </h1>
          <p className="font-poppins text-justify text-xs text-[#575757] mt-2">
            Langsung dari Kebun Sendiri yang 
            tersebar di setiap provinsi yang
            memiliki cabang toko Jez Salad.
          </p>
          <div className="flex">
            <p className="font-poppins text-xs text-[#575757] mt-8">
              Learn More
            </p>
            <img
              className="w-4 h-4 mt-[34px] ml-1"
              src="Images/Arrow.png"
              alt=""
            />
          </div>
        </div>
        <div class="box-content w-48 h-64 p-4 border-2 border-orange-50 rounded-2xl mt-12">
          <img className="w-20 h-20" src="Images/Choose3.png" alt="" />
          <h1 className="font-poppins font-bold text-[#2B2B2B] mt-8">
            100 Top Brand
          </h1>
          <p className="font-poppins text-justify text-xs text-[#575757] mt-2">
            We are one of the best brands in the Food and Beverage sector
            in Indonesia.
          </p>
          <div className="flex">
            <p className="font-poppins text-xs text-[#575757] mt-8">
              Learn More
            </p>
            <img
              className="w-4 h-4 mt-[34px] ml-1"
              src="Images/Arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
