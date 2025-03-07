import React from "react";

interface HeroImageProps {
  imageUrl: string;
  altText: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText }) => {
  return (
    <div className="mt-[175px] mb-5">
      <img
        src={imageUrl}
        alt={altText}
        className="w-[350px] h-[350px] object-contain max-md:w-[300px] max-md:h-[300px] max-sm:w-[250px] max-sm:h-[250px]"
      />
    </div>
  );
};

export default HeroImage;
