import React from "react";
import Image from "next/image";
import ActiveBlood from "@/assets/images/ActiveBlood.svg";
import DormantAlert from "@/assets/images/DormantAlert.svg";
import DormantHand from "@/assets/images/DormantHand.svg";
import NigerianChildMobile from "@/assets/images/NigerianChildMobile.svg";
import NigerianChldDesktop from "@/assets/images/NigeriaChildDesktop.svg";
import DesktopBloodAlert from "@/assets/images/Desktop_Blood_Alert.svg"
import DesktopAlarmPicture from "@/assets/images/Desktop_Alarm_Picture.svg"
import DesktopHelpPicture from "@/assets/images/DesktopHelpPicture.svg"

const WhereWeAre = () => {
  return (
    <div>
      {/* Where we are */}
      <div className="gap-y-12   max-w-full  grid mt-20 mx-auto md:mt-0 md:mx-0 md:flex md:justify-between md:gap-y-0 md:grid-cols-2">
        {/* Left Section */}
        <div className="grid max-w-[24] mx-auto  grid-cols-4 gap-y-6 md:max-w-full md:py-16">
          {/* Where we are button */}
          <div className="col-start-2 col-end-4 mx-auto md:col-span-5 md:mx-0 md:px-8 md:mt-[6rem]">
            <button className="text-xs font-bold px-[1.12rem] rounded-full py-2 bg-[#FCD1CD] text-[#1A1A1A] font-lato md:text-lg md:py-[0.62rem] md:px-6">
              WHERE WE ARE
            </button>
          </div>
          {/* Section icons and buttons */}
          <div className="col-start-1 col-end-5 ">
            <div className="container grid grid-cols-4 grid-flow-row gap-x-4 gap-y-4 md:gap-y-16">
              {/* Mobile */}
              {/* Blood Shortage */}
              <div className="col-start-1 max-w-1/2 col-end-3 md:max-w-full md:col-span-5">
                <div className="flex space-x-1 items-center">
                  <Image src={ActiveBlood} alt="Active Blood" className="md:hidden"/>
                  <Image src={DesktopBloodAlert} alt="Blood Alert" className="hidden md:block"/>
                  <h1 className="text-xl font-black font-lato text-[#1A1A1A] md:text-5xl">
                    Blood Shortage
                  </h1>
                </div>
              </div>

              {/* Critical Impact */}
              <div className="col-start-3 max-w-1/2 col-end-5 md:col-span-5 md:max-w-full">
                <div className="flex space-x-1 items-center">
                  <Image src={DormantAlert} alt="Dormant Alert" className="md:hidden" />
                  <Image src={DesktopAlarmPicture} alt="Desktop Alarm Dormant Picture" className="hidden md:block"/>
                  <h1 className="text-xl font-black font-lato text-[#D1D1D1] md:text-5xl">
                    Critical Impact
                  </h1>
                </div>
              </div>

              {/* Help Available */}
              <div className="col-start-2 col-end-4 md:col-span-5">
                <div className="flex space-x-1 items-center">
                  <Image src={DormantHand} alt="Dormant Hand" className="md:hidden" />
                  <Image src={DesktopHelpPicture} alt="Dormant Desktop Help Picture" className="hidden md:block"/>
                  <h1 className="text-xl font-black font-lato text-[#D1D1D1] md:text-5xl">
                    Help Available
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        {/* Mobile Image */}
        <div className="box-border w-full marker: px-4 py-10 bg-[#B80F00] md:pl-[6.06rem] md:pr-[6.25rem] md:py-16 md:space-y-9 md:w-1/2">
          <div className=" md:w-auto text-center">
            <Image src={NigerianChildMobile} alt="Nigerian Child Mobile" className="md:hidden mx-auto" />
            <Image src={NigerianChldDesktop} alt="Nigerian Child Desktop" className="hidden md:block mx-auto" />
          </div>

          <div>
            <p className="text-white text-lg font-lato font-normal md:text-[1.875rem] mt-10">
              According to WorldHO, Nigeria requires an average of 1.8 million pints of blood yearly to meet her healthcare needs. <br /> <br /> However, we currently receive only about 500,000 pints of blood each year, leaving a 76% deficit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeAre;
