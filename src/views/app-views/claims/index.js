import { useState } from "react";
import ClaimTable from "./table";

const tabs = [
  { name: "In Progress", id: "in-progress", count: 10 },
  { name: "Pending", id: "pending", count: 5 },
  { name: "Completed", id: "completed", count: 9 },
];

const Claim = () => {
  const [selectedTab, setSelectedTab] = useState({
    name: "In Progress",
    id: "in-progress",
  });
  return (
    <main className="flex-1">
      <div className="max-w-9xl mx-auto">
        <h3 className="font-semibold text-xl">Claims</h3>
        <div className="mt-3 sm:mt-2">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="
                        block
                        w-full
                        pl-3
                        pr-10
                        py-2
                        text-base
                        border-gray-300
                        focus:outline-none
                        focus:ring-green-500
                        focus:border-green-500
                        sm:text-sm
                        rounded-md
                      "
            >
              {tabs.map((tab) => {
                return (
                  <option key={tab.name} defaultValue={selectedTab.id}>
                    {tab.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center justify-between">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => {
                  return (
                    <div
                      key={tab.id}
                      aria-current={
                        tab.id === selectedTab.id ? "page" : undefined
                      }
                      onClick={() => setSelectedTab(tab)}
                      className={`${
                        tab.id === selectedTab.id
                          ? "border-green-500 dark-green-text"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                      } 'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm cursor-pointer'`}
                    >
                      {tab.name}
                      {tab.count && (
                        <span
                          className={`${
                            tab.id === selectedTab.id
                              ? "dark-green-bg text-gray-900"
                              : "bg-gray-100 text-gray-900"
                          } "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                                `}
                        >
                          {tab.count}
                        </span>
                      )}
                    </div>
                  );
                })}
              </nav>
              <button
                type="button"
                className="
                          inline-flex
                          items-center
                          px-4
                          py-2
                          border border-transparent
                          shadow-sm
                          text-sm
                          font-medium
                          rounded-full
                          text-white
                          dark-green-bg
                          hover-light-green-bg
                          focus:outline-none
                          focus:ring-0
                        "
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <section className="mt-8 pb-16">
          <ClaimTable selectedTab={selectedTab} />
        </section>
      </div>
    </main>
  );
};

export default Claim;
