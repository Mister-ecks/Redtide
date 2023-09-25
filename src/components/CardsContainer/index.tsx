import React from "react";
import Cards from "../Cards";
import Image from "next/image";
import MobilePhoneIcon from "@/assets/images/MobilePhonePic.svg";
import DesktopPhoneIcon from "@/assets/images/DesktopPhonePic.svg";
import HostMobile from "@/assets/images/HostMobile.svg";
import HostDesktop from "@/assets/images/HostDesktop.svg";
import VolunteerMobile from "@/assets/images/VolunteerMobiles.svg";
import VolunteerDesktop from "@/assets/images/VolunteerDesktop.svg";

const CardsContainer = () => {
  return (
    <div>
      <section>
        <div className=" flex flex-col mx-auto max-w-full mt-6 md:mt-16   md:mx-[3rem] ">
          {/* Same Two Cards */}
          <div className="flex flex-col items-center mx-auto md:flex-row md:justify-between ">
            <Cards
              head="Donate Blood with the Redtide app"
              info="Join our life-saving mission and become a vital part of the network that  touches hearts, and inspires hope."
              picture1={MobilePhoneIcon}
              picture2={DesktopPhoneIcon}
            />
            <Cards
              head="Host a Blood Drive"
              info="Join our life-saving mission and become a vital part of the network that  touches hearts, and inspires hope."
              picture1={HostMobile}
              picture2={HostDesktop}
            />
          </div>

          {/* Third Card */}
          <div className="mx-auto">
            <div className="py-6 px-4 flex flex-col  mx-auto items-center w-full border-b  border-b-[#E0E0E0] md:justify-between md:border-b-0 md:flex-row md:mx-auto md:px-10
            md:items-center">
              {/* Photo */}
              {/* Mobile Phone */}
              <div className="flex items-center space-x-4">
                <div>
                <div className="block md:hidden">
                <Image src={VolunteerMobile} alt="phone icon" />
              </div>
              <div className="hidden md:block">
                <Image src={VolunteerDesktop} alt="desktop icon" />
              </div>
                </div>
              

              {/* Text */}
              <div className="flex flex-col  justify-between  md:flex-row md:items-center">
                <div className="flex flex-col space-y-3">
                  <div>
                  <h1 className="text-left leading-normal text-lg font-bold md:text-[2.125rem]">
                    Volunteer or Join Campaign
                  </h1>
                  <p className="text-[#1A1A1A] text-left mt-2 text-xs  md:text-2xl md:mt-3">
                    Join our life-saving mission and become a vital part of the
                    network that touches hearts, and inspires hope.
                  </p>

                  </div>
                 
                  <div className="md:hidden">
                  <button className="py-3 px-6 text-sm md:text-2xl border rounded-full text-[#B80F00]  md:mt-6 border-[#B80F00] md:border-2 ">Donate</button>
                  </div>

                  <div className="hidden md:block">
                <button className="py-3 px-6 text-sm md:text-2xl border rounded-full text-[#B80F00] mt-[0.75rem]  md:mt-6 border-[#B80F00] md:border-2 ">
                  Donate
                </button>
              </div>
                  
                </div>
              </div>
            </div>
              
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsContainer;
