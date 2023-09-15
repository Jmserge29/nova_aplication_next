"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import {
  SquaresPlusIcon,
  UserCircleIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  CodeBracketIcon,
  HomeIcon,
  FolderOpenIcon,
  ArrowRightOnRectangleIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/20/solid";
import MovilSideBar from "./MovilSideBar";
import Link from "next/link";

const navegation = [
  {
    id: "123412",
    name: "Me 👨‍💻",
    url: "/me",
    icon: <UserCircleIcon />,
  },
  {
    id: "1234197",
    name: "Dashboard 👨‍💻",
    url: "/me/dashboard",
    icon: <WrenchScrewdriverIcon />,
  },
  {
    id: "123421",
    name: "Analytics 👨‍💻",
    url: "/me/analytics",
    icon: <ChartPieIcon />,
  },
  {
    id: "1234197",
    name: "Friends 🎇",
    url: "/me/friends",
    icon: <UserGroupIcon />,
  },
  {
    id: "123430",
    name: "Conversations 📱",
    url: "me/messages",
    icon: <ChatBubbleBottomCenterIcon />,
  },
  {
    id: "123449",
    name: "Services 🗂️",
    url: "/services",
    icon: <FolderOpenIcon />,
  },
];

const navigationAvanced = [
  {
    id: "123458",
    name: "Settings ⚙️",
    url: "/me/settings",
    icon: <Cog6ToothIcon />,
  },
  {
    id: "123467",
    name: "Doc 📄",
    url: "/doc",
    icon: <CodeBracketIcon />,
  },
];

export const IconSideBar = ({ icon, text = "tooltip 💡", condition }) => {
  return (
    <>
      <div className="sidebar-icon group">
        {icon}
        {condition ? (
          <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

function SideBarTailwind() {
  const [mobileSidebar, setMobileSideBar] = useState(false);

  return (
    <>
      {/* SideBar --> Browser */}
      <div className="hidden lg:flex fixed top-0 left-0 h-screen w-20 flex-col bg-white text-white drop-shadow-2xl">
        <div className="mt-6">
          <Link href={"/"} key={"ghdyrv4w5w43"}>
            <HomeIcon className="sidebar-icon mt-6 mb-8" />
          </Link>
          <hr className="border-zinc-200 border-2 rounded-xl mx-3 my-4" />
          {navegation.map((icon, i) => {
            return (
              <div className="my-3" key={icon.url}>
                <Link href={icon.url}>
                  <IconSideBar
                    icon={icon.icon}
                    text={icon.name}
                    key={icon.id}
                    condition={true}
                  />
                </Link>
              </div>
            );
          })}
          <hr className="border-zinc-200 border-2 rounded-xl mx-3 my-5" />

          {navigationAvanced.map((icon) => {
            return (
              <Link href={icon.url} key={icon.url}>
                <IconSideBar
                  icon={icon.icon}
                  text={icon.name}
                  key={icon.id}
                  condition={true}
                />
              </Link>
            );
          })}
          <hr className="border-zinc-200 border-2 rounded-xl mx-3 mt-6" />

          <div className="py-4 text-center">
            <button
              onClick={() => {
                signOut();
              }}
            >
              <IconSideBar
                key={"Prodsgsdfe52"}
                icon={
                  <ArrowRightOnRectangleIcon
                    className="h-8 w-8"
                    aria-hidden="true"
                  />
                }
                text={"Close ❌"}
                condition={true}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Responsive Side Bar */}
      <div className="sidebar-icon flex text-center justify-center m-2 lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 hover:text-white"
          onClick={() => setMobileSideBar(true)}
        >
          <span className="sr-only">Open SideBar</span>
          <SquaresPlusIcon className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
      <MovilSideBar
        navigationAvanced={navigationAvanced}
        navegation={navegation}
        mobileSidebar={mobileSidebar}
        setMobileSideBar={setMobileSideBar}
        IconSideBar={<IconSideBar />}
      />
    </>
  );
}

export default SideBarTailwind;
