import React from 'react'
import Cards from "../Cards";
import MobilePhoneIcon from "@/assets/images/MobilePhonePic.svg"
import DesktopPhoneIcon from "@/assets/images/DesktopPhonePic.svg"
import HostMobile from "@/assets/images/HostMobile.svg"
import HostDesktop from "@/assets/images/HostDesktop.svg"


const CardsContainer = () => {
  return (
    <div>
        <section>
        <div className="flex flex-col mx-auto max-w-full mt-6 md:mt-16 md:max-w-full md:flex-row md:justify-between md:items-center md:mx-[3rem] ">
            <Cards  
            head="Donate Blood with the Redtide app" 
            info="Join our life-saving mission and become a vital part of the network that  touches hearts, and inspires hope."
            picture1={MobilePhoneIcon}
            picture2={DesktopPhoneIcon}
            />
            <Cards 
            head="Host a Blood Drive"
            info='Join our life-saving mission and become a vital part of the network that  touches hearts, and inspires hope.'
            picture1={HostMobile}
            picture2={HostDesktop}
            />
        </div>
        </section>
    </div>
  )
}

export default CardsContainer