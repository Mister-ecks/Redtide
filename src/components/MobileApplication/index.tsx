import React from "react";
import Image from "next/image";
import MobileGooglePlay from "@/assets/images/GoogleMobile.svg"
import MobileApple from "@/assets/images/AppleMobile.svg"
import RedtideView1 from "@/assets/images/RedtideMobileView1.svg"
import RedtideView2 from "@/assets/images/RedtideMobileView2.svg"


const MobileApp = () => {
  return (
    <div>
      <section className="bg-[#B80F00] flex flex-col pt-[5.25rem] md:pt-[6.31rem] pl-[1.5rem] md:pl-[7.5rem] md:flex-row md:space-x-[7.19rem]">
        <div>
          <div className="bg-[#D71100] inline font-lato text-white text-[0.75rem] md:text-[1.125rem] font-bold py-[0.5rem] px-[1.12rem] rounded-full md:py-[0.62rem] md:px-[1.5rem]">
            MOBILE APPLICATION
          </div>
          <h1 className="text-[1.5rem] mt-[1.12rem] max-w-[23.75rem] font-lato text-[#F9FAFF] font-black md:text-[2.25rem] md:max-w-[25rem] md:mt-[1.5rem]">Download the RedTide Application Now!</h1>
          <p className="max-w-[23.75rem] mt-[0.5rem] font-lato text-white md:max-w-[33.6875rem] text-[0.75rem] md:text-[1.125rem] md:mt-[1.5rem]">Lorem ipsum dolor sit amet consectetur. Mauris non lacus nibh nec volutpat odio amet. Libero at purus aliquet scelerisque tempor. Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
Lorem ipsum dolor sit amet consectetur. Mauris non lacus nibh nec volutpat odio amet. Libero at purus aliquet scelerisque tempor.</p>
            <div className="flex space-x-[0.56rem] mt-4">
                <Image src={MobileGooglePlay} alt="mobile google play"/>
                <Image src={MobileApple} alt="Mobile Appstore"/>
            </div>
        </div>
        <div className="flex space-x-[-15rem] mx-auto mt-[4.38rem]">
            <Image src={RedtideView1} alt="mobile 1" className="z-10"/>
            <Image src={RedtideView2} alt="mobile 2" className=""/>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
