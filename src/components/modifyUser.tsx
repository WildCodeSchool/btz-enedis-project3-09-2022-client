import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { userFetcher } from "../utils/fetcher";
import { TUser } from "../types/main";

function ModifyUser() {
  const {
    isLoading,
    error,
    data: Alluser,
  } = useQuery(["getAllUser"], () => userFetcher.getAll());

  if (isLoading || !Alluser) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <p>Sorry something went wrong</p>;
  }
  return (
    <div className="bg-green-enedis w-screen h-full p-2 ">
      <div className="bg-background-enedis flex-all-center rounded-app-bloc w-full p-2">
        <p className="text-mob-sm(multiuse)">Je veux ajouter un membre : </p>
        <div className="bg-blue-enedis w-full rounded-full h-10">
          <div className="flex items-center p-1 h-10">
            <Image
              src="/logo_enedis/picto_search_white.svg"
              alt=" recherche"
              width={10}
              height={10}
              className="w-9 h-8"
            />
            <input type="text" className="w-full rounded-full h-8" />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex flex-row space-x-2 ">
            <Image
              src="/logo_enedis/logo_vue.svg"
              alt="rien a branler"
              width={10}
              height={10}
              className="h-6 w-6"
            />
            <Image
              src="/logo_enedis/logo_comment.svg"
              alt="rien a branler"
              width={10}
              height={10}
              className="h-6 w-6"
            />
            <Image
              src="/logo_enedis/logo_publish.svg"
              alt="rien a branler"
              width={10}
              height={10}
              className="h-6 w-6"
            />
            <Image
              src="/logo_enedis/logo_handle.svg"
              alt="rien a branler"
              width={10}
              height={10}
              className="h-5 w-5"
            />
          </div>
        </div>
        <div className="flex justify-end w-full ">
          <div className="flex flex-col">
            {Alluser.map((user: TUser) => (
              <div className="flex flex-row justify-end w-full space-x-4 items-center border border-black">
                <div className="">
                  <div className="w-fit flex justify-start items-center overflow-hidden mb-2 mr-2">
                    <div className="w-[30px] min-w-[30px] h-[30px] relative rounded-full overflow-hidden -mr-3">
                      <Image
                        alt={`${user.firstname} ${user.lastname.toUpperCase()}`}
                        src={user.imageUrl}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-fit max-w-[calc(100%-18px)] rounded-full border border-blue-enedis px-4 py-[6px]">
                      <p className="text-mob-xs(textPost) text-center truncate scrollbar-hide hover:text-clip hover:overflow-x-visible md:text-desk-sm(textPost+multiuse)">
                        {user.firstname} {user.lastname.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>
                <input type="radio" className="h-4 w-4" />
                <input type="radio" className="h-4 w-4" />
                <input type="radio" className="h-4 w-4" />
                <input type="radio" className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyUser;