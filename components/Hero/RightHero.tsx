import Image from "next/image";
import React from "react";

const RightHero = () => {
  return (
    <div className="flex justify-center md:w-[500px] 2xl:w-[700px]">
                    <Image src="/hero.png" alt="img" width={500} height={300} />
                </div>
  );
};

export default RightHero;
