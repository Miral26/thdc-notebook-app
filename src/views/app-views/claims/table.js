import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    id: 1,
    title: "Patient",
    name: "name",
  },
  {
    id: 2,
    title: "Charge date",
    name: "charge_date",
  },
  {
    id: 3,
    title: "Payment Amount",
    name: "payment_amount",
  },
  {
    id: 4,
    title: "Status",
    name: "status",
  },
  {
    id: 5,
    title: "Notes",
    name: "notes",
  },
  {
    id: 6,
    title: "Action",
    name: "action",
  },
];

const people = [
  {
    id: 1,
    name: "Jane Cooper",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
  },
  {
    id: 2,
    name: "Cody Fisher",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
  },
  {
    id: 3,
    name: "Esther Howard",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
  },
  {
    id: 6,
    name: "Kristin Watson",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
  },
];

const ClaimTable = (props) => {
  const { edit, selectedTab } = props;
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => {
                    return (
                      <th
                        key={column.id}
                        scope="col"
                        className="
                              px-6
                              py-3
                              text-left text-xs
                              font-medium
                              text-gray-500
                              uppercase
                              tracking-wider
                            "
                      >
                        {column.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => {
                  return (
                    <tr key={person.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.charge_date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.payment_amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-green-100
                          text-green-800
                        "
                        >
                          {selectedTab.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.notes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          to="#"
                          className="dark-green-text"
                          onClick={(e) => {
                            e.preventDefault();
                            edit();
                          }}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimTable;
