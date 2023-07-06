import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MobileMenu = ({ navigation, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <Dialog
        as="div"
        className=""
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button className="rounded-full px-4 py-2 outline-4 transition ease-in-out delay-150 bg-gradient-to-r from-pink-200 from-5% bg-white via-30% to-fuchsia-100 to-80% hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                  Sign-In <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default MobileMenu;
