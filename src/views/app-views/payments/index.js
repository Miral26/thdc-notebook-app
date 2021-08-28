import Tabs from "components/tabs";
import { useState } from "react";
import ClaimTable from "./table";

const tabs = [
  { name: "Pending", id: "pending", count: 10 },
  { name: "Completed", id: "completed", count: 16 },
  { name: "Refunded", id: "refunded" },
  { name: "Failed", id: "failed", count: 1 },
];

const Claim = () => {
  const [selectedTab, setSelectedTab] = useState({
    name: "Pending",
    id: "pending",
  });
  return (
    <main className="flex-1">
      <div className="max-w-9xl mx-auto">
        <h3 className="font-semibold text-xl">Payments</h3>
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
              <Tabs
                tabs={tabs}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
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
