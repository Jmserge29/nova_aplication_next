"use client"
import SideBarTailwind from "../../components/Sidebar/SideBarTailwind";
import ProfileCard from "@/components/Profile/ProfileCard";
import DetailsUser from "@/components/Profile/DetailsUser";
import SkeletonDetails from "@/components/Skeleton/SkeletonDetails";
import SkeletonProfile from "@/components/Skeleton/SkeletonProfile";
import { useSession } from "next-auth/react";
import ProfileSection from "@/components/Profile/ProfileSection";
import SkeletonPublications from "@/components/Skeleton/SkeletonPublications";
import Publications from "@/components/Profile/Publications";


export default function Page() {
  const { data: session, status } = useSession();
  console.log(session);

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
      <SideBarTailwind />

      {/* Content */}
      <div className="p-4 pt-8 lg:ml-32 sm:mr-64">
        <div className="p-4 border-gray-200 mt-14">
          {session ? <ProfileSection session={session}/> : <SkeletonProfile/>}

          <div className="grid sm:grid-cols-3 grid-cols-1">
            {/* Columna A */}
            {session ? <DetailsUser session={session}/> : <SkeletonDetails/>}
            {/* Columna B */}
            <div className="col-span-1 sm:col-span-2">
              <div className="mt-4">
                {session ? <Publications/> : <SkeletonPublications/>}
              </div>
            </div>
          </div>
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
