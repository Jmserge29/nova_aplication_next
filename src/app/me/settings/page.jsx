
export const metadata = {
    title: 'Settings',
  }

export default function Page() {
    return(
        <>
        {/* background Gradient Start */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* Content */}
        <div className="sm:mx-32 mx-12 mt-6 sm:mt-12">
            <h3 className="pl-5 text-4xl font-semibold sm:pb-6 pb-4 text-stone-800 leading-3">Settings</h3>
            <hr className="border my-2 border-indigo-400 rounded-lg border-y-2"/>
            
            <div className="">
            <div className="rounded-xl shadow-lg mt-8 py-8 px-9 my-4 mx-2 bg-white">
                <div className="grid sm:grid-cols-3 grid-cols-1">
                  <div className="col-span-1 grid-rows-3 sm:border-r-4 sm:border-indigo-400 py-4">
                    <div className="flex justify-center row-span-2 text-2xl font-bold text-emerald-500">
                      15.4k
                    </div>
                    <div className=" row-span-1 flex justify-center">
                      Followings
                    </div>
                  </div>
                  <div className="col-span-1 grid-rows-3 sm:border-r-4 sm:border-indigo-400 py-4">
                    <div className="flex justify-center row-span-2 text-2xl font-bold text-teal-600">
                      15.4k
                    </div>
                    <div className=" row-span-1 flex justify-center">
                      Followers
                    </div>
                  </div>
                  <div className="col-span-1 grid-rows-3 py-4">
                    <div className="flex justify-center row-span-2 text-2xl font-bold text-rose-500 ">
                      4.8h
                    </div>
                    <div className=" row-span-1 flex justify-center">
                      Hours
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="grid sm:grid-cols-4 grid-cols-1 sm:py-4 py-6">

              {/* Privacy Setings */}
              <div className="rounded-xl shadow-xl  py-8 bg-white my-4 mx-2 px-6">
                <h4 className=" flex justify-center text-xl sm:pb-4 sm:pt-2 pt-1 pb-2 ml-4 font-semibold mb-4 leading-4 text-stone-950">Privacy Settings</h4>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Profile Visibility : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-indigo-400">
                     Public
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Contact Info Visibility : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-sky-400">
                    friends_only
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Solicitude AutoFollowing : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-emerald-400">
                      Yes
                  </div>
                </div>
              </div>

              {/* Prefences */}
              <div className="rounded-xl shadow-xl py-8 bg-white my-4 mx-2 px-6">
                <h4 className=" flex justify-center text-xl sm:pb-4 sm:pt-2 pt-1 pb-2 ml-4 font-semibold mb-4 leading-4 text-stone-950">Preferences</h4>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Languaje : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-red-400">
                     Spanish
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Timezone : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-indigo-400">
                    California
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Trending Likes : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-violet-400">
                      Engineer
                  </div>
                </div>
              </div>


              {/* Permissions */}
              <div className="rounded-xl shadow-xl py-8 bg-white my-4 mx-2 px-6">
                <h4 className=" flex justify-center text-xl sm:pb-4 sm:pt-2 pt-1 pb-2 ml-4 font-semibold mb-4 leading-4 text-stone-950">Permissions</h4>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Can Post Messages : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-emerald-400">
                     Yes
                  </div>
                </div>
                <div className="font-medium grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                      Can Create Chanels: 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-red-400">
                    No
                  </div>
                </div>
                <div className="font-medium grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Can Invite Users : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-emerald-400">
                      Yes
                  </div>
                </div>
              </div>


              {/* Notification Setings */}
              <div className="rounded-xl shadow-xl py-8 bg-white my-4 mx-2 px-6">
                <h4 className=" flex justify-center text-xl sm:pb-4 sm:pt-2 pt-1 pb-2 ml-4 font-semibold mb-4 leading-4 text-stone-950">Notification Setings</h4>
                <div className="grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className=" font-medium col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    Email : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-emerald-400">
                      Yes
                  </div>
                </div>
                <div className=" font-medium grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    SMS : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-red-400">
                    No
                  </div>
                </div>
                <div className=" font-medium grid sm:grid-cols-3 grid-cols-2 lg:text-base py-1 text-sm">
                  <div className="col-span-1 flex justify-start pl-2  sm:col-span-2 text-stone-950">
                    PUSH : 
                  </div>
                  <div className="col-span-1 flex justify-center font-semibold text-red-400">
                      No
                  </div>
                </div>
              </div>







            </div>
        </div>
        </>
    )
}