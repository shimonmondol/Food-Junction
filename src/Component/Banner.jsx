import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F5F5F5] w-full pt-2">
      <div
        className="
          max-w-[1010px] w-full mx-auto px-4
          flex flex-col lg:flex-row
          items-center lg:items-start
          justify-between
        "
      >
        {/* IMAGE FIRST (MOBILE) */}
        <div className="order-1 mt-10 lg:order-2 lg:mt-10">
          <img
            className="
              w-[260px] sm:w-[320px] lg:w-[400px]
              h-auto lg:h-[450px]
              mx-auto
            "
            src="Images/Illustration.png"
            alt=""
          />
        </div>

        {/* TEXT SECOND (MOBILE) */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1
            className="bg-[#FFF0DC] w-[145px] h-[30px] font-poppins font-bold text-xs
                         text-[#FB9333] rounded-2xl mt-10 px-2 py-2
                         mx-auto lg:mx-0"
          >
            #1 Best Healthy Salad
          </h1>

          <h1
            className="font-poppins font-bold pt-4 text-[#575757]
            text-3xl sm:text-4xl lg:text-5xl leading-snug sm:leading-tight 
            lg:leading-[55px]"
          >
            <span className="text-[#FB9333]">Skip</span> The Diet,
            <br /> Just Eat Healthy <br />
            With Jez Salad
          </h1>

          <p className="font-poppins text-[#828282] pt-4 text-sm sm:text-base">
            Imagine you don't need a diet because we provide{" "}
            <br/>
            healthy and delicious food for you!
          </p>

          <img
            className="w-[150px] pt-4 pr-2 mx-auto lg:mx-0"
            src="Images/Frame 7.png"
            alt=""
          />
          <div className="flex justify-center gap-8 lg:justify-start">
            <div>
              <p className="font-poppins text-base font-semibold text-[#575757] pt-8">
                5000+
              </p>
              <p className="font-poppins font-semibold text-[#828282]">
                Customer
              </p>
            </div>
            <div>
              <p className="font-poppins text-base font-semibold text-[#575757] pt-8">
                8000+
              </p>
              <p className="font-poppins font-semibold text-[#828282]">
                Delivery
              </p>
            </div>
            <div>
              <p className="font-poppins text-base font-semibold text-[#575757] pt-8">
                1000+
              </p>
              <p className="font-poppins font-semibold text-[#828282]">
                Ratings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
