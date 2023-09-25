import React from 'react'
import Image from 'next/image';

interface ImageWithHoverProps {
    imageUrl: string;
    text: string;
    additionalText: string;
    marginTop: string;
    marginTopDesktop: string;
  }

const ImageWithHover: React.FC<ImageWithHoverProps> = ({imageUrl, text, additionalText, marginTop, marginTopDesktop}) => {
  return (
    <div>
        <div className="relative">
          <Image src={imageUrl} alt="Image" className="max-w-full h-auto w-auto" />
          <div className={`absolute inset-0 flex justify-start items-center bg-black opacity-0 hover:opacity-70  h-auto  transition-opacity duration-500 ease-in-out`}>
            <div className={`font-lato flex flex-col ml-[1.5rem] mt-[${marginTop}] md:mt-[${marginTopDesktop}]`}>
              <p className="text-white text-[1.12rem]">{text}</p>
              <p className="text-white text-[0.75rem]">{additionalText}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageWithHover