import React from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    id: 1,
    title: "Name",
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
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    name: "Cody Fisher",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    name: "Esther Howard",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 6,
    name: "Kristin Watson",
    charge_date: "2021-08-25",
    payment_amount: "$10",
    status: "Pending",
    role: "Admin",
    notes: "-",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const ClaimTable = (props) => {
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
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
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
                          {props.selectedTab.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.notes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link to="#" className="dark-green-text">
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
