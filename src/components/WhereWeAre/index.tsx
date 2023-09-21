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
      {/* Mobile Section */}
      <section>
        {/* Container */}
        <div className="mx-auto container max-w-full flex flex-col justify-center mt-[5rem] md:flex-row md:mt-0">
          {/* Where we are */}
          <div className="mx-auto md:ml-[6.25rem] md:my-auto md:w-1/2">
          <div className="flex justify-center mb-[1.5rem] md:justify-start md:ml-[1rem]">
          <button className="text-center font-lato text-[0.75rem] px-[1.12rem] py-[0.5rem] bg-[#FCD1CD] font-bold rounded-full md:px-[1.5rem] md:py-[0.62rem]md:text-[1.125rem]">WHERE WE ARE</button>
          </div>
          {/* Blood Shortage and Critical Impact */}
          <div className="flex mx-auto items-center space-x-[1.5rem] md:flex-col md:space-x-0 md:space-y-[4rem] md:items-start">
              <button className="flex items-center space-x-[0.38rem] md:space-x-[0.75rem]">
                <Image src={ActiveBlood} alt="Active Blood" className="md:hidden"/>
                <Image src={DesktopBloodAlert} alt="Active blood deskop" className="hidden md:block"/>
                <h1 className="text-[1.25rem] font-black md:text-[3rem]">Blood Shortage</h1>
              </button>
              <button className="flex items-center space-x-[0.38rem] md:space-x-[0.75rem]">
                <Image src={DormantAlert} alt="Dormant Alert" className="md:hidden"/>
                <Image src={DesktopAlarmPicture} alt="Dormant Alert Desktop" className="hidden md:block"/>
                <h1 className="text-[1.25rem] text-[#D1D1D1] font-black md:text-[3rem]">Critical Impact</h1>
              </button>
          </div>

          {/* Help Available */}
          <div className="mx-auto flex justify-center mt-[1rem] md:justify-start md:mt-[4rem]">
          <button className="flex items-center space-x-[0.38rem] md:space-x-[0.75rem]">
                <Image src={DormantHand} alt="Dormant" className="md:hidden"/>
                <Image src={DesktopHelpPicture} alt="DormalHelpIcon" className="hidden md:block"/>
                <h1 className="text-[1.25rem] text-[#D1D1D1] font-black md:text-[3rem]">Help Available</h1>
              </button>
          </div>
          </div>
          
          
          <div className="bg-[#B80F00] mt-[3rem] pb-[4.88rem] flex flex-col justify-between max-w-full md:w-1/2 md:pb-[6.19rem]">
            <div className="mx-auto mt-[4.7rem]">
            <Image src={NigerianChildMobile} alt="Nigerian Image" className="md:hidden"/>
            <Image src={NigerianChldDesktop} alt="Nigerian Image Desktop" className="hidden md:block"/>
            </div>
            
            <div className="mx-auto mt-[2.56rem]">
              <p className="text-[1.125rem] mx-[1.5rem] font-lato text-white md:text-[1.875rem] md:ml-[4rem]">According to WorldHO, Nigeria requires an average of 1.8 million pints of blood yearly to meet her healthcare needs. 
              <br/>
              <br />
However, we currently receive only about 500,000 pints of blood each year, leaving a 76% deficit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default WhereWeAre;
