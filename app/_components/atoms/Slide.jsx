import Image from "next/image";
import React from "react";

const Slide = ({ image, alt }) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={image}
        layout="fill"
        objectFit="contain" // Keeps aspect ratio
        alt={alt}
      />
    </div>
  );
};

export default Slide;
