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
    title: "Date of Birth",
    name: "dob",
  },
  {
    id: 3,
    title: "Phone",
    name: "phone",
  },
  {
    id: 4,
    title: "Email",
    name: "email",
  },
  {
    id: 5,
    title: "Group #",
    name: "group",
  },
  {
    id: 6,
    title: "Subscriber Info",
    name: "subscriber_info",
  },
  {
    id: 7,
    title: "Customer Card",
    name: "customer_card",
  },
  {
    id: 8,
    title: "Claim",
    name: "claim",
  },
  {
    id: 9,
    title: "Action",
    name: "action",
  },
];

const people = [
  {
    id: 1,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 2,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 3,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: 4,
    name: "Jane Cooper",
    dob: "07/02/2021",
    phone: "(123) 456-7890",
    email: "zubair+patient@coral.global",
    group: "1234",
    subscriber_info: "-",
    customer_card: "-",
    claim: "-",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const PatientTable = (props) => {
  const { createClaim, editPatient, addPayment, deletePatient } = props;
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
                          {person.dob}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.group}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link to="#" className="dark-green-text">
                          View
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          to="#"
                          className="dark-green-text"
                          onClick={(e) => {
                            e.preventDefault();
                            addPayment();
                          }}
                        >
                          Add
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          to="#"
                          className="dark-green-text"
                          onClick={(e) => {
                            e.preventDefault();
                            createClaim();
                          }}
                        >
                          Create
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          to="#"
                          className="dark-green-text pr-3"
                          onClick={(e) => {
                            e.preventDefault();
                            editPatient();
                          }}
                        >
                          Edit
                        </Link>
                        <Link
                          to="#"
                          className="text-red-600 hover:text-red-900"
                          onClick={(e) => {
                            e.preventDefault();
                            deletePatient();
                          }}
                        >
                          Delete
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

export default PatientTable;
