import Image from "next/image";
import React from "react";

const Slide = ({ image, alt }) => {
  return (
    <div className="w-full h-[75vh] overflow-hidden">
      <Image
        src={image}
        width={1920}
        height={1080}
        style={{objectFit:"contain", layout:"fill"}} // Keeps aspect ratio
        alt={alt}
      />
    </div>
  );
};

export default Slide;
