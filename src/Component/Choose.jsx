import React from "react";

const Choose = () => {
  return (
    <div className="bg-[#F5F5F5] w-full py-20">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* TITLE */}
        <h1 className="font-poppins font-bold text-3xl text-[#585858] text-center max-w-[500px] mx-auto">
          WHY CHOOSE US <br />
          <span className="text-[#FB9333] block mt-2">
            FOR YOUR HEALTHY FOOD
          </span>
        </h1>

        {/* CARDS */}
        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="p-5 bg-white border rounded-2xl border-orange-50">
            <img className="w-20 h-20" src="Images/Choose2.png" alt="" />
            <h1 className="font-poppins font-bold text-[#2B2B2B] mt-3">
              #1 Healthy Fruit Salad
            </h1>
            <p className="font-poppins text-sm text-justify text-[#575757] mt-2 leading-5">
              The pioneer of healthy fruit salads that are delicious & suitable
              with the best quality assurance.
            </p>
            <img className="h-8 mt-4 w-28" src="Images/Frame 11.png" alt="" />
          </div>

          {/* CARD 2 */}
          <div className="p-5 bg-orange-100 border rounded-2xl border-orange-50">
            <img className="w-20 h-20" src="Images/Choose1.png" alt="" />
            <h1 className="font-poppins font-bold text-[#2B2B2B] mt-3">
              Own Fruit Orchard
            </h1>
            <p className="font-poppins text-sm text-justify text-[#575757] mt-2 leading-5">
              Fruit orchard is a piece of land where a person grows fruit trees
              for personal use or commercial purposes.
            </p>
            <div className="flex items-center mt-6">
              <p className="text-xs text-[#575757]">Learn More</p>
              <img className="w-4 h-4 ml-1" src="Images/Arrow.png" alt="" />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="p-5 bg-white border rounded-2xl border-orange-50">
            <img className="w-20 h-20" src="Images/Choose3.png" alt="" />
            <h1 className="font-poppins font-bold text-[#2B2B2B] mt-3">
              100 Top Brand
            </h1>
            <p className="font-poppins text-sm text-justify text-[#575757] mt-2">
              The 100 Top Brands represent the world’s most valuable and
              influential companies across technology and consumer goods.
            </p>
            <div className="flex items-center mt-6">
              <p className="text-xs text-[#575757]">Learn More</p>
              <img className="w-4 h-4 ml-1" src="Images/Arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
