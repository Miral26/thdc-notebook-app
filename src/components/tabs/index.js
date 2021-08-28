import React from "react";
import { Link } from "react-router-dom";

const Tabs = (props) => {
  const { selectedTab, tabs, setSelectedTab } = props;
  return (
    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
      {tabs.map((tab) => {
        return (
          <Link
            to="#"
            key={tab.id}
            aria-current={tab.id === selectedTab.id ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab(tab);
            }}
            className={`${
              tab.id === selectedTab.id
                ? "border-green-500 dark-green-text"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
            } 'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm`}
          >
            {tab.name}
            {tab.count && (
              <span
                className={`${
                  tab.id === selectedTab.id
                    ? "dark-green-bg text-gray-900"
                    : "bg-gray-100 text-gray-900"
                } "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block cursor-pointer"
                  `}
              >
                {tab.count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Tabs;
