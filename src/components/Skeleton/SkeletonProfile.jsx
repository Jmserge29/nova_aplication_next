function SkeletonProfile() {
  return (
    <>
      <div className="flex animate-pulse">
        <div className="absolute sm:ml-32 sm:mt-40 ml-12 mt-52 flex-shrink-0">
          <span className="sm:w-44 sm:h-44 w-28 h-28 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
        </div>

        <div className=" w-full my-4 mx-2 py-6 px-6 shadow-sm rounded-md bg-gray-100 text-stone-950">
          <div
            role="status"
            className="flex items-center justify-center h-56 w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
          >
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex justify-center col-span-1">
            </div>
            <div className=" col-span-3">
              <div className="sm:ml-1 ml-16 mt-6 sm:pb-8 flex w-full">
                <h3
                  className="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
                  style={{ width: "70%" }}
                ></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonProfile;
