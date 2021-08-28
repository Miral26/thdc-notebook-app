import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const PatientSideModal = (props) => {
  const { showModal = false, cancel, save } = props;
  return (
    <Transition.Root as={Fragment} show={showModal}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-50"
        onClose={cancel}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div
                className="w-screen max-w-2xl relative h-full
                flex flex-col
                bg-white
                shadow-xl
                overflow-y-scroll"
              >
                <div className="flex-1">
                  <div className="px-4 pt-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div className="h-7 flex items-center">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500"
                          onClick={cancel}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="space-y-1">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Patient Information
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-6 pb-16">
                    <h5>Create New Patient</h5>
                    <form>
                      <div class="overflow-hidden sm:rounded-md">
                        <div class="py-5 bg-white">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="first_name"
                                class="block text-sm font-medium text-gray-700"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="last_name"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="email-address"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Email address
                              </label>
                              <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autocomplete="email"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="dob"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Date of Birth (MM/DD/YYYY)
                              </label>
                              <input
                                type="text"
                                name="dob"
                                id="dob"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="phone"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Phone
                              </label>
                              <input
                                type="text"
                                name="phone"
                                id="phone"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="group"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Group #
                              </label>
                              <input
                                type="text"
                                name="group"
                                id="group"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="subscriber_name"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Subscriber Name
                              </label>
                              <input
                                type="text"
                                name="subscriber_name"
                                id="subscriber_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="subscriber_name"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Subscriber Id
                              </label>
                              <input
                                type="text"
                                name="subscriber_name"
                                id="subscriber_name"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="subscriber_dob"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Subscriber Date of Birth (MM/DD/YYYY)
                              </label>
                              <input
                                type="text"
                                name="subscriber_dob"
                                id="subscriber_dob"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="delta"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Delta
                              </label>
                              <select
                                id="delta"
                                name="delta"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              >
                                <option selected>Please select</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                              <label
                                for="delta_location"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Delta Location
                              </label>
                              <select
                                id="delta_location"
                                name="delta_location"
                                class="
                                  mt-1
                                  focus:ring-0
                                  focus:outline-none
                                  block
                                  w-full
                                  shadow-sm
                                  sm:text-sm
                                  border border-solid border-gray-300
                                  rounded-md
                                  py-1
                                  px-2
                                "
                              >
                                <option selected>Please select</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            px-4
                            py-3
                            text-left
                            sm:px-6
                            absolute
                            bottom-0
                            right-0
                            left-0
                            bg-white
                          "
                        >
                          <button
                            type="submit"
                            className="
                            inline-flex
                            justify-center
                            py-2
                            px-4
                            border border-transparent
                            shadow-sm
                            text-sm
                            font-medium
                            rounded-md
                            text-white
                            dark-green-bg
                            hover-light-green-bg
                            focus:outline-none
                            focus:ring-0
                          "
                            onClick={(e) => {
                              e.preventDefault();
                              save();
                            }}
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="
                            inline-flex
                            justify-center
                            py-2
                            px-4
                            border border-transparent
                            shadow-sm
                            text-sm
                            font-medium
                            rounded-md
                            text-green
                            ml-3
                            border-green-600
                            hover:bg-green-700
                            focus:outline-none
                            focus:ring-0
                          "
                            onClick={cancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PatientSideModal;
