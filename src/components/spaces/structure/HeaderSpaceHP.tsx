import Image from "next/image";
import React from "react";
import { TSpace } from "../../../types/main";

interface IProps {
  oneSpace: TSpace;
}

function HeaderSpaceHP({ oneSpace }: IProps) {
  const { imageUrl, name } = oneSpace;
  return (
    <div className="w-full relative z-0 h-[75px] md:h-[90px]">
      <div className="w-full h-full bg-blue-enedis mix-blend-hard-light opacity-[85%] relative z-20" />
      <Image
        alt={name || "site name"}
        src={imageUrl || "/site_image.png"}
        fill
        className="object-cover relative z-10 min-h-full"
      />
      <div className="absolute z-30 centered-absolute w-full font-enedis text-white-enedis">
        <h1 className="text-mob-xl(headers+titles) font-medium md:text-desk-3xl(header+name)">
          {name}
        </h1>
      </div>
    </div>
  );
}
export default HeaderSpaceHP;
