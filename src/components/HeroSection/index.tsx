import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="container mt-10 flex flex-col items-center mx-auto justify-between space-y-6">
        {/* Text */}
        <div className="">
          {/* Heading */}
          <div className="leading-10 md:leading-[5rem]">
            <h1 className="font-lato text-[2rem] font-black text-[#1A1A1A] text-center md:text-7xl">
              Donate <span className="text-[#B80F00]">Blood</span>. <br />
              Save Lives With <span className="text-[#B80F00]">RedTide</span>.
            </h1>
          </div>

          {/* Paragraph */}
          <div>
            <p className="text-[#5B6563] text-xs text-center mx-4 mt-3 md:text-2xl md:mx-8">
              Download our Blood Donation App and Join the Life-Saving
              Community. Your Generous Contribution can Make a Difference!
            </p>
          </div>
        </div>
        {/* Button */}

        <a
          className="py-3 px-[1.12rem] text-sm font-medium bg-[#B80F00] font-inter  rounded-full text-white md:text-[1.0625rem] md:py-4 md:px-6"
          href=""
        >
          Am I eligible to donate?
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
