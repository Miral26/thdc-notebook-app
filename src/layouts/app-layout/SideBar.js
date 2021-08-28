import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ClockIcon,
  ScaleIcon,
  HomeIcon,
  DocumentReportIcon,
  UserGroupIcon,
  LocationMarkerIcon,
  XIcon,
} from "@heroicons/react/outline";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Claims",
    redirectTo: "claims",
    icon: HomeIcon,
    selectedParentMenu: "claims",
  },
  {
    name: "Payments",
    redirectTo: "payments",
    icon: ClockIcon,
    selectedParentMenu: "payments",
  },
  {
    name: "Patients",
    redirectTo: "patients",
    icon: ScaleIcon,
    selectedParentMenu: "patients",
  },
  {
    name: "Users",
    redirectTo: "users",
    icon: UserGroupIcon,
    selectedParentMenu: "users",
  },
  {
    name: "Insights",
    redirectTo: "insights",
    icon: DocumentReportIcon,
    selectedParentMenu: "insights",
  },
  {
    name: "Locations",
    redirectTo: "locations",
    icon: LocationMarkerIcon,
    selectedParentMenu: "locations",
  },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const SideBar = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(props.mobileMenuOpen);
  const [selectedParentMenu, setSelectedParentMenu] = useState("claims");

  useEffect(() => {
    const parentMenu = window.location.pathname
      .split("/")
      .filter((x) => x !== "")[1];
    setSelectedParentMenu(parentMenu);
  }, []);

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-28 bg-white overflow-y-auto md:block">
        <div className="w-full py-6 flex flex-col items-center">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Workflow" />
          </div>
          <div className="py-6 flex flex-col items-center space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.redirectTo}
                className={classNames(
                  item.selectedParentMenu === selectedParentMenu
                    ? "dark-green-bg text-white"
                    : "text-gray-600 hover-dark-green-bg hover:text-white",
                  "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                )}
                onClick={() => setSelectedParentMenu(item.selectedParentMenu)}
                aria-current={
                  item.selectedParentMenu === selectedParentMenu
                    ? "page"
                    : undefined
                }
              >
                <item.icon
                  className={classNames(
                    item.selectedParentMenu === selectedParentMenu
                      ? "text-gray-100"
                      : "dark-green-text group-hover:text-gray-100",
                    "h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="mt-2">{item.name}</span>
              </Link>
            ))}
          </div>
          {/* <div className="flex-shrink-0 flex pb-5">
            <Menu as="div" className="relative flex-shrink-0">
              <div>
                <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-0">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 z-1000 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
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
              </Transition>
            </Menu>{" "}
          </div> */}
        </div>
      </div>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="md:hidden" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-1 right-0 -mr-14 p-1">
                    <button
                      type="button"
                      className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                  <nav className="h-full flex flex-col">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.redirectTo}
                          className={classNames(
                            item.selectedParentMenu === selectedParentMenu
                              ? "bg-green-800 text-white"
                              : "text-green-100 hover:bg-green-800 hover:text-white",
                            "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                          )}
                          aria-current={
                            item.selectedParentMenu === selectedParentMenu
                              ? "page"
                              : undefined
                          }
                        >
                          <item.icon
                            className={classNames(
                              item.selectedParentMenu === selectedParentMenu
                                ? "text-white"
                                : "text-green-300 group-hover:text-white",
                              "mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SideBar;
