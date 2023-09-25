import React from 'react'
import Image from 'next/image';

interface ImageWithHoverProps {
    imageUrl: string;
    text: string;
    additionalText: string;
    marginTop: string

  }

const ImageWithHover: React.FC<ImageWithHoverProps> = ({imageUrl, text, additionalText, marginTop}) => {
  return (
    <div>
        <div className="relative">
          <Image src={imageUrl} alt="Image" className="max-full h-auto w-auto" />
          <div className={`absolute inset-0 bg-black opacity-0 hover:opacity-70  h-auto  transition-opacity duration-500 ease-in-out`}>
            <div className={`font-lato flex flex-col mt-[${marginTop}] ml-[1.5rem]`}>
              <p className="text-white text-[1.12rem]">{text}</p>
              <p className="text-white text-[0.75rem]">{additionalText}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageWithHover