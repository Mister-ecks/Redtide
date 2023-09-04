import Image from "next/image"
import MobileLogo from "@/assets/images/MobileLogo.svg"

import Hamburger from "@/assets/images/Hamburger.svg"

const Header = () => {
  return (
    <div>
        <nav className="relative container mx-auto p-6 ">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div>
                <Image src={MobileLogo} alt="mobile logo"/>
              </div>

              {/* Menu Items*/}
              <div className="hidden md:flex space-x-6">
                <a href="" className="font-inter font-medium text-[1.0625rem] text-[#202223]">About</a>
                <a href="" className="font-inter font-medium text-[1.0625rem] text-[#202223]">Donate</a>
                <a href="" className="font-inter font-medium text-[1.0625rem] text-[#202223]">Join the tide</a>
                <a href="" className="font-inter font-medium text-[1.0625rem] text-[#202223]">Wall of Hope</a>
              </div>


              {/* Actions */}

              <div className="hidden md:flex space-x-6">
                <a href="" className="py-4 px-6 border font-medium border-[#B80F00] text-[#B80F00] text-[1.0625rem] rounded-full">Login</a>
                <a className="py-4 px-6 border border-[#B80F00] bg-[#B80F00] font-medium text-[white] text-[1.0625rem] rounded-full" href="" >Can I donate?</a>
              
              </div>

              
              {/* Hamburger Menu Icon */}
              <Image src={Hamburger} alt="Hamburger menu" className="md:hidden"/>
            </div>
        </nav>
    </div>
  )
}

export default Header