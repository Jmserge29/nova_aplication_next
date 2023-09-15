import React from 'react'

function SkeletonFriend() {
  const arrayList = ["1", "2", "3", "4", "5","6", "7", "8", "9", "10", "11", "12"]
  return (
    <>
    {arrayList.map((data) => {
      return(
        <div key={data} className="rounded-xl shadow-lg drop-shadow-sm mx-4 bg-white text-stone-950 animate-pulse">
        {/* Background Photo */}
        <div className="p-2 m-4 flex justify-center">
        <div
          className="rounded-full my-2 bg-cover bg-gray-700 bg-center sm:h-32 h-28 sm:w-32 w-28"
              ></div>
        </div>
        {/* Descrption */}
        <div className="p-2 m-4 grid grid-rows-2">
          <div className="flex justify-center row-span-1 font-medium">
            <h3
              className="h-3 bg-gray-200 rounded-md dark:bg-gray-700"
              style={{ width: "40%" }}
            ></h3>
          </div>
          <div className="flex justify-center row-span-1 pt-2">
          <h3
              className="h-2 bg-gray-200 rounded-md dark:bg-gray-700"
              style={{ width: "20%" }}
            ></h3>
          </div>
        </div>
        {/* Actions */}
        <div className="grid grid-cols-2 h-12 ">
          <div className="flex bg-slate-400 rounded-bl-xl justify-center columns-1">
          </div>
          <div className="flex bg-gray-700 rounded-br-xl text-white justify-center font-medium columns-1">
          </div>
        </div>
      </div>
    
      )
    })}
    </>

  )
}

export default SkeletonFriend