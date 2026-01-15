import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#F5F5F5] w-full pt-20 sm:pt-24 lg:pt-32 px-4">
      <div
        className="max-w-[965px] mx-auto bg-orange-100 rounded-3xl
                      py-12 sm:py-16 lg:h-[400px] lg:py-0
                      flex items-center justify-center"
      >
        <div className="text-center">
          <p className="font-poppins font-medium text-xs sm:text-sm text-[#FB9333]">
            Our Subscribe
          </p>

          <h1 className="font-poppins font-semibold text-2xl sm:text-3xl text-[#585858] pt-2">
            Subscribe To Get The Latest <br />
            Promo from Jez Salad
          </h1>

          <p className="font-poppins font-medium text-[#575757] text-xs sm:text-sm pt-4 sm:pt-6 pb-6">
            We recommended you to subscribe to our promo program,
            <br/>
            drop your email below to get daily update about us
          </p>

          <img
            className="w-full max-w-[280px] h-[35px] sm:max-w-[350px] lg:max-w-[400px] lg:h-[45px] mx-auto"
            src="Images/Frame 14.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
