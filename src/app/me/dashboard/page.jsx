"use client"
import { useSession, signOut } from "next-auth/react";
import Loader from "@/components/Loaders/loader";
import { useState } from "react";
const user = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }


function page() {
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
    </>
  );
}

export default page;
