"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import InformationsP from "./InformationsP";
import MobileMenu from "./MovilMenu";
import Pagination from "./Pagination";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Doc", href: "/doc" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div>
            
          </div>
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Nova ✨</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Nova ✨"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Pagination />
            <InformationsP navigation={navigation} />
          </div>
          <div className=" hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/signin"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <button className="rounded-full px-4 py-2 outline-4 transition ease-in-out delay-150 bg-gradient-to-r from-pink-200 from-5% bg-white via-30% to-fuchsia-100 to-80% hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                Sign-In <span aria-hidden="true">&rarr;</span>
              </button>
              
            </a>
          </div>
        </nav>
        <MobileMenu
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
    </>
  );
};

export default NavBar;
