import React from "react";

const About = () => {
  return (
    <div className="bg-[#F5F5F5] w-full">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="px-4 py-10 bg-orange-100 rounded-xl lg:px-6 lg:py-20">
          {/* MAIN WRAPPER */}
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* LEFT CONTENT */}
            <div className="lg:w-1/3">
              <h1 className="font-poppins font-bold text-3xl text-[#333333]">
                What Are People <br />
                <span className="text-[#FB9333]">Saying About Us</span>
              </h1>

              <p className="font-poppins text-sm text-justify text-[#999999] pt-8">
                We are very happy if you are satisfied with our service and
                products, let's read pure reviews from customers who bought our
                products.
              </p>

              <div className="flex items-end mt-6">
                <h1 className="font-raieway font-bold text-4xl text-[#333333]">
                  02
                </h1>
                <span className="font-raieway font-bold text-xs text-[#CCCCCC] mb-1 ml-1">
                  / 05
                </span>
              </div>

              <img className="w-20 h-8 mt-4" src="Images/Frame 39.png" alt="" />
            </div>

            {/* RIGHT CARDS */}
            <div className="lg:w-2/3">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Selena Gomz", age: "22", img: "Images/Person1.png" },
                  { name: "David Ken", age: "24", img: "Images/Person2.png" },
                  {
                    name: "Jennifer Sina",
                    age: "21",
                    img: "Images/Person3.png",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative p-4 bg-white rounded-md">
                    <img
                      className="absolute w-12 h-12 left-4"
                      src={item.img}
                      alt=""
                    />
                    <h1 className="font-poppins font-medium text-[#2B2B2B] mt-16 text-lg">
                      {item.name}
                    </h1>
                    <p className="font-poppins text-sm text-[#999999]">
                      {item.age} years
                    </p>
                    <p className="font-poppins text-sm text-justify text-[#575757] mt-4">
                      The salad is fresh!!! Don't ask about the sauce again,
                      it's really delicious, I recommend this salad to all of
                      you guys. it's going to be routine.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
