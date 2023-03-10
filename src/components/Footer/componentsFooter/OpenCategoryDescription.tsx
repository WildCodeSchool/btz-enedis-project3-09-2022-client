import Image from "next/image";
import React from "react";

type Props = {
  openCategorieDescription: boolean;
  HandleClickCategorieDescription: () => void;
};

function OpenCategoryDescription({
  openCategorieDescription,
  HandleClickCategorieDescription,
}: Props) {
  return (
    <div className="w-full">
      <div
        className={`relative flex justify-center w-full  h-full  ${
          openCategorieDescription && "bg-background-enedis"
        } `}
      >
        {openCategorieDescription ? (
          <div className="flex items-center justify-center">
            <Image
              src="/logo_enedis/Picto_Bleu_info_catégorie.svg"
              width={40}
              height={40}
              alt="logo des info-espaces"
              className="z-20"
              onClick={HandleClickCategorieDescription}
            />
          </div>
        ) : (
          <div className="relative flex justify-center  w-full bg-blue-enedis">
            <div className=" flex justify-center items-center">
              <Image
                src="/logo_enedis/Picto_Vert_info_catégorie.svg"
                width={32}
                height={40}
                alt="logo des info-espaces"
                onClick={HandleClickCategorieDescription}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OpenCategoryDescription;
