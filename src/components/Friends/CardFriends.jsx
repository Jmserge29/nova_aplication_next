import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

function CardFriends({ user }) {
  return (
    <>
      <div className="m-2 mt-10">
        {/* Buttons */}
        <div className="">
          <div className="absolute rounded-full bg-indigo-500 text-white font-medium justify-center">
            <EllipsisVerticalIcon className="w-10 h-10 hover:cursor-pointer" />
          </div>
        </div>
        <img
          className="rounded-full bg-white cursor-pointer bg-cover w-44 h-44 border-2 border-slate-50"
          src={user.picture}
          alt={user.username}
        />
      </div>
    </>
  );
}

export default CardFriends;
