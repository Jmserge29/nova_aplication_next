import React from "react";
import { Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { IconSideBar } from "./SideBarTailwind";
function MovilSideBar({
  mobileSidebar,
  setMobileSideBar,
  navigationAvanced,
  navegation,
}) {
  return (
    <Dialog
      as="div"
      className=""
      open={mobileSidebar}
      onClose={setMobileSideBar}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-auto overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-center">
          <button onClick={() => setMobileSideBar(false)}>
            <IconSideBar
              icon={<XMarkIcon className="h-6 w-6" aria-hidden="true" />}
              text={"Close"}
              key={"1"}
            />
          </button>
        </div>
        {/* Items */}
        <div className="mt-6">
          <div className="-my-2">
            <div className="space-y-2 py-4">
              <div className="py-6">
                {navegation.map((icon) => {
                  return (
                    <IconSideBar
                      icon={icon.icon}
                      text={icon.name}
                      key={icon.id}
                    />
                  );
                })}
              </div>
              <hr className="border-zinc-200 border-1 rounded-sm " />
              <div className="py-8">
                {navigationAvanced.map((icon) => {
                  return (
                    <IconSideBar
                      icon={icon.icon}
                      text={icon.name}
                      key={icon.id}
                    />
                  );
                })}
              </div>
            </div>
            <hr className="border-zinc-200 border-1 rounded-sm " />

            <div className="py-6 text-center">
              <button onClick={() => setMobileSideBar(false)}>
                <IconSideBar
                  key={"ewfhgauhsd76"}
                  icon={
                    <ArrowRightOnRectangleIcon
                      className="h-8 w-8"
                      aria-hidden="true"
                    />
                  }
                  text={"Close"}
                />
              </button>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default MovilSideBar;
