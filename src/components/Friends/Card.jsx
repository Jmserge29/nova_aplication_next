import React from 'react'

function Card({user}) {
  return (
    <div className=" columns-1 p-4 m-4">

    <div className="rounded-xl shadow-2xl bg-white text-stone-950">
    {/* Background Photo */}
    <div className="p-2 m-4 flex justify-center">
        <div
        className="rounded-full hover:cursor-pointer my-2 bg-cover bg-slate-50 bg-center sm:h-32 h-28 sm:w-32 w-28"
            style={{
                backgroundImage: `url("${user.picture}")`,
            }}
            ></div>
    </div>
    {/* Descrption */}
    <div className="p-2 m-4 grid grid-rows-2">
      <div className="flex justify-center row-span-1 font-medium">
        {user.username}
      </div>
      <div className="flex justify-center row-span-1">
        @{user.username}
      </div>
    </div>
    {/* Actions */}
    <div className="grid grid-cols-2 h-12 ">
      <div className="flex hover:cursor-pointer bg-slate-100 rounded-bl-xl justify-center columns-1">
        <button className=" xl:text-base text-sm font-medium">
          Denege
        </button>
      </div>
      <div className="flex hover:cursor-pointer bg-blue-600 rounded-br-xl text-white justify-center font-medium columns-1">
        <button className=" xl:text-base text-sm">
          Accept
        </button>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Card