import React from "react";

function SkeletonDetails() {

  const skeletonArray = ["123", "456", "789"]
  return (
    <>
      <div className="animate-pulse">
        {skeletonArray.map((data) => {
          return(
            <div key={data} className=" my-4 mx-2 py-6 px-6 shadow-sm rounded-md bg-gray-100 text-stone-950">
            <h3
              className="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
              style={{ width: "40%" }}
            ></h3>
  
            <ul className="mt-5 space-y-3">
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-600"></li>
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-600"></li>
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-600"></li>
              <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-600"></li>
            </ul>
          </div>
  
          )
        })}
      </div>
      
    </>
  );
}

export default SkeletonDetails;
