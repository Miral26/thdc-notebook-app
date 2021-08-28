import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const ClaimSideModal = (props) => {
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
                className="w-screen max-w-2xl relative                 h-full
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
                          Claim Information
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-6 pb-16">
                    <h5>Create New Claim</h5>
                    <form>
                      <div className="overflow-hidden sm:rounded-md">
                        <div className="py-5 bg-white">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="patient"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Patient*
                              </label>
                              <select
                                id="patient"
                                name="patient"
                                autoComplete="patient"
                                className="
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Status*
                              </label>
                              <select
                                id="status"
                                name="status"
                                autoComplete="status"
                                className="
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="appointment_date"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Appointment Date*
                              </label>
                              <input
                                type="text"
                                name="appointment_date"
                                id="appointment_date"
                                className="
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

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="appointment_location"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Appointment Location
                              </label>
                              <select
                                id="appointment_location"
                                name="appointment_location"
                                autoComplete="appointment_location"
                                className="
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="charge_date"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Charge Date
                              </label>
                              <input
                                type="text"
                                name="charge_date"
                                id="charge_date"
                                className="
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
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="payment_amount"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Payment Amount
                              </label>
                              <select
                                id="payment_amount"
                                name="payment_amount"
                                autoComplete="payment_amount"
                                className="
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="notes"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Notes
                              </label>
                              <textarea
                                id="notes"
                                name="notes"
                                rows="7"
                                className="
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
                                placeholder="you@example.com"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <div className="col-span-3">
                                <label
                                  className="
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                                >
                                  File Attachments
                                </label>
                                <div
                                  className="
                                  mt-1
                                  border-2 border-gray-300 border-dashed
                                  rounded-md
                                  px-6
                                  pt-6
                                  pb-7
                                  flex
                                  justify-center
                                "
                                >
                                  <div className="space-y-1 text-center">
                                    <svg
                                      className="mx-auto h-12 w-12 text-gray-400"
                                      stroke="currentColor"
                                      fill="none"
                                      viewBox="0 0 48 48"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                      <label
                                        htmlFor="file-upload"
                                        className="
                                        relative
                                        cursor-pointer
                                        bg-white
                                        rounded-md
                                        font-medium
                                        text-indigo-600
                                        hover:text-indigo-500
                                        focus-within:outline-none
                                        focus-within:ring-2
                                        focus-within:ring-offset-2
                                        focus-within:ring-indigo-500
                                      "
                                      >
                                        <span>Upload a file</span>
                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          className="sr-only"
                                        />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                      PNG, JPG, GIF up to 10MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="
                          px-4
                          py-3
                          text-right
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

export default ClaimSideModal;
