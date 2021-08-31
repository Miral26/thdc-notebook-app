import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { MenuAlt2Icon, HomeIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import CronJobModal from "components/CronJobModal";

const userNavigation = [
  { name: "Your Profile", href: "#", click: null },
  {
    name: "Sign out",
    href: "#",
    click: (e, history) => {
      e.preventDefault();
      localStorage.removeItem("token");
      history.push("auth");
    },
  },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function TopBar(props) {
  const history = useHistory();
  const [showCronJobModal, setShowCronJobModal] = useState(false);

  return (
    <div>
      <header className="w-full">
        <div className="relative z-10 flex-shrink-0 h-16 bg-transparent border-b border-gray-200 shadow-sm flex">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => props.setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-between px-4 sm:px-6">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search all files
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <SearchIcon
                      className="flex-shrink-0 h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    name="search-field"
                    id="search-field"
                    className="h-full w-full border-transparent bg-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>

            <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <Menu.Button
                    class="
                    bg-green-100
                    rounded-lg
                    flex
                    w-40
                    items-center
                    text-gray-400
                    hover:text-gray-600
                    focus:outline-none
                    mr-3
                    pl-2
                    pr-4
                    py-2
                  "
                  >
                    <span class="sr-only">Open options</span>
                    <HomeIcon
                      class="h-5 w-5 light-green-text"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white  focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            onClick={(e) =>
                              item.click && item.click(e, history)
                            }
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </transition>
              </Menu>

              <button
                type="button"
                class="
                inline-flex
                items-center
                px-3
                py-1.5
                border border-transparent
                text-xs
                font-medium
                rounded-full
                shadow-sm
                text-white
                dark-green-bg
                hover-light-green-bg
                focus:outline-none
              "
                onClick={() => setShowCronJobModal(!showCronJobModal)}
              >
                Run daily job
              </button>
            </div>
          </div>
        </div>
      </header>
      <CronJobModal
        showModal={showCronJobModal}
        save={() => setShowCronJobModal(!showCronJobModal)}
        cancel={() => setShowCronJobModal(!showCronJobModal)}
      />
    </div>
  );
}
