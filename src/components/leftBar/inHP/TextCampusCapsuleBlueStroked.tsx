import React from "react";

type Props = { city: string };

function TextCampusCapsuleBlueStroked({ city }: Props) {
  return (
    <div className="w-fit max-w-full rounded-full border border-blue-enedis px-4 py-[6px] mb">
      <p className="text-mob-sm(multiuse) truncate scrollbar-hide hover:text-clip hover:overflow-x-visible md:text-desk-sm(textPost+multiuse)">
        {city}
      </p>
    </div>
  );
}

export default TextCampusCapsuleBlueStroked;
