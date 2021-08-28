import ClaimSideModal from "components/ClaimSideModal";
import Tabs from "components/Tabs";
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

  const [showClaimModal, setShowClaimModal] = useState(false);

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
                onClick={() => setShowClaimModal(true)}
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <section className="mt-8 pb-16">
          <ClaimTable
            selectedTab={selectedTab}
            edit={() => setShowClaimModal(!showClaimModal)}
          />
        </section>
      </div>
      <ClaimSideModal
        showModal={showClaimModal}
        cancel={() => setShowClaimModal(!showClaimModal)}
        save={() => setShowClaimModal(!showClaimModal)}
      />
    </main>
  );
};

export default Claim;
