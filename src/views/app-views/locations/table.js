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
    title: "Address",
    name: "address",
  },
  {
    id: 3,
    title: "POC",
    name: "poc",
  },
  {
    id: 4,
    title: "Phone",
    name: "phone",
  },
  {
    id: 5,
    title: "Bank",
    name: "bank",
  },
  {
    id: 6,
    title: "",
    name: "action",
  },
];

const people = [
  {
    id: 1,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    name: "Jane Cooper",
    address: "15th St, Oakland, CA 90401",
    poc: "April Salemo",
    phone: "(123) 456-7890",
    bank: "****7293",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const LocationTable = (props) => {
  const { editLocation } = props;
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
                          {person.address}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.poc}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.bank}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          to="#"
                          className="dark-green-text"
                          onClick={(e) => {
                            e.preventDefault();
                            editLocation();
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

export default LocationTable;
