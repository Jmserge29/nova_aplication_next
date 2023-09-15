import React from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";


export const IconSideBar = ({ }) => {
  return (
    <>
      <div className="rounded-3xl hover:rounded-lg bg-white shadow-lg hover:bg-indigo-400 flex justify-center transition-all duration-300 cursor-pointer ease-linear hover:scale-110 group">
        <div className="p-2">
          <img
            className="w-16 rounded-full h-16 bg-cover"
            src="https://geo-media.beatsource.com/image_size/500x500/4/8/b/48b3150a-ce72-4dc1-8026-2ae5afb10459.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </>
  );
};

function SideMessages() {

  const profiles = [
    {
      name: "Totoy El Frio"
    },
    {
      name: "Drake"
    },
    {
      name: "Ñengo Flow"
    },
    {
      name: "Eladio Carrion"
    },
    {
      name: "Mora"
    },
    {
      name: "Saiko"
    },
    {
      name: "Dekko"
    },
    {
      name: "Lil Supa"
    },
    {
      name: "Peso Pluma"
    },
    {
      name: "Bnet"
    },
    {
      name: "Bad Bunny"
    }


  ]
  return (
    <>
      {/* SideMessages Navigation */}
      <div className="col-span-1 px-2">
        <div className="ml-8 fixed h-5/6 lg:flex w-32 flex-col rounded-lg bg-white ">
          <div className="px-4 py-4 space-y-4 overflow-y-auto">

            {profiles.map((data) => {
              return(
                <IconSideBar key={data.name} />
              )
            })}

          </div>
        </div>
      </div>
    </>
  );
}

export default SideMessages;
