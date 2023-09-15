"use client"
import { useSession, signOut } from "next-auth/react";
import Loader from "@/components/Loaders/loader";
import { useState } from "react";
import MinidenticonImg from '../../../components/Minidenticons/MinidenticonImg'
import axios from "axios";

export const metadata = {
  title: "Dashboard",
};


function page() {
  const [username, setUsername ]= useState("")
  const { data: session, status } = useSession();
  console.log(session);
  // const [dtU, setDtu] = useState()
  // setDtu(session)
  return (
    <>
    <div className="flex mx-5 py-2 justify-end">
      <button onClick={()=>{signOut()}} className="bg-stone-700 text-slate-100 rounded-md py-2 px-8">Sign-Out</button>
    </div>
      <div className="p-4 pt-8 lg:ml-64 lg:mr-64">
        <div className="rounded-lg shadow-xl bg-slate-300 relative">
          <div className="text-4xl text-center font-semibold pt-2 sm:pt-8 pb-2 sm:pb-7">
            <h2>Data User</h2>
          </div>
          <div className="flex w-full pb-8 items-center justify-center">
          <div className="rounded-md  shadow-lg bg-slate-900 text-white w-2/3 h-2/3 md:px-8 md:py-8">
            <pre>
            {session? <>{JSON.stringify(session.user,null,2)}</>:  (<Loader/>)}
            
            </pre>
          </div>
          </div>
        </div>
      </div>
      <div className="p-4 m-2 lg:ml-64 lg:mr-64">
        <div className="rounded-lg shadow-2xl bg-white relative">
          <div className="text-center font-semibold text-lg sm:pt-4 pt-2 sm:pb-5 pb-3">
            <h2 className="text-4xl font-bold leading-4 pt-12 text-blue-500 italic">(Username)</h2>
          </div>
          <div className="flex justify-center">
          <MinidenticonImg
            username={username}
            saturation="90"
            width="300"
            height="300"
          />

          </div>
          <div className="flex justify-center py-4 ">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className=" italic font-bold text-center text-indigo-400 ring-1 ring-inset ring-gray-200 placeholder:text-blue-400 focus:ring-2 rounded-xl focus:ring-inset focus:ring-indigo-400 py-3 mx-3 px-5 content-center "/>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
