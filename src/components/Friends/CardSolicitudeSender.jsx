import React from "react";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/20/solid";

function CardSolicitudeSender({user}) {
  return (
    <>
      <div className=" col-span-1 mt-5 row-span-1 mx-3 mb-6 ">
        <div className=" grid grid-cols-7 rounded-lg shadow-xl shadow-stone-300 hover:shadow-sm hover:border-2 hover:border-indigo-400 h-48 bg-white">
          <div className="col-span-2 grid place-items-center">
            <img
              className=" cursor-pointer bg-cover bg-center rounded-full sm:w-36 w-24 sm:h-36 h-24 ml-6"
              src={user.picture}
              alt={user.username}
            />
          </div>
          <div className=" col-span-4 grid grid-rows-1 sm:my-14 sm:ml-10 ml-7">
            <div className="row-span-1">
              <h3 className="sm:text-2xl text-sm font-semibold inline-block">
                {user.username}{" "}
                <CheckBadgeIcon className=" inline-block w-5 h-5 text-blue-500" />{" "}
              </h3>
              <br />
              <span className="sm:text-sm text-xs">
                1.3 millones amigos • 7,540 seguidos
              </span>
              <br />
              <span className="sm:text-sm text-xs font-medium">
                Solicitud enviada 23/08/2023
              </span>
            </div>
          </div>
          <div className="col-span-1 grid place-items-center">
            <XMarkIcon className="h-9 w-9 text-stone-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSolicitudeSender;
