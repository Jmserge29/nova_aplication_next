import HeaderMessages from "@/components/MessagesComponents/HeaderMessages";
import SideMessages from "@/components/MessagesComponents/SideMessages";
import { PaperAirplaneIcon, PhotoIcon, LinkIcon } from "@heroicons/react/20/solid";
export const metadata = {
  title: "Chats",
};

function ChatPage() {
  return (
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
      <div className=" pb-4 pl-4 pt-12 lg:ml-32 ">
      <div className="text-2xl font-semibold leading-4 pb-5 pl-3">Conversations</div>

        <div className="grid grid-cols-9">
          <div className=" col-span-8">
            <div className=" rounded-xl shadow-2xl border-stone-500 border-spacing-1 bg-white mt-8">
              <div className="pb-8">

                {/* header */}
                <HeaderMessages/>

                <div className="mx-12 h-96 mt-12 flex justify-center">
                  Content
                </div>

                <div className=" rounded-md flex justify-center mt-7 border-2 mx-32 px-5 border-spacing-2 border-zinc-200 mb-8">
                  <div className="grow italic flex justify-center py-2">
                    <input type="text" placeholder="Escribe un mensaje" className="italic text-md sm:text-md font-medium w-full py-2 focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0" />
                  </div>
                  <div className=" flex-none grid grid-cols-3">
                    <div className="col-span-1 flex justify-center"><button className="rounded-lg py-3 px-4 bg-blue-500 my-1 mx-2"><PaperAirplaneIcon className=" text-white w-5 h-5"/></button></div>
                    <div className="col-span-1 flex justify-center"><button className="rounded-lg py-3 px-4 bg-amber-500 my-1 mx-2"><PhotoIcon className=" text-white w-5 h-5"/></button></div>
                    <div className="col-span-1 flex justify-center"><button className="rounded-lg py-3 px-4 bg-stone-500 my-1 mx-2"><LinkIcon className=" text-white w-5 h-5"/></button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SideMessages */}
          <SideMessages/>
        </div>


      </div>

      {/* background Gradient End */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </>
  );
}

export default ChatPage;
