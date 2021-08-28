/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const PaymentModal = (props) => {
  const { showModal = false, cancel, save } = props;

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={cancel}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pt-5
              pb-4
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8
              sm:align-middle
              sm:max-w-4xl
              sm:w-full
              sm:p-6
            "
            >
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Add Payment Details
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="
                    bg-white
                    rounded-md
                    text-gray-400
                    hover:text-gray-500
                    focus:outline-none
                    focus:ring-0
                  "
                    onClick={cancel}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </Dialog.Title>
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-5/12 px-4">
                  <div className="dark-green-bg rounded-xl shadow-xl p-6">
                    <h4 className="text-right text-2xl font-semibold mb-12">
                      VISA
                    </h4>
                    <h5 className="text-2xl">1456 1298 6574 1287</h5>
                    <div className="flex justify-between mt-3 text-xl">
                      <h6>JACK SPARROW</h6>
                      <h6>02/25</h6>
                    </div>
                  </div>
                </div>
                <div className="w-7/12 px-3">
                  <div className="px-3">
                    <h4 className="mb-4">Payment Details</h4>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
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
                    <div className="mb-3">
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="number"
                        id="number"
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
                    <div className="mb-3">
                      <div className="flex flex-wrap -mx-3">
                        <div className="w-1/3 px-3">
                          <div className="mb-3">
                            <label
                              htmlFor="valid_through"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Valid Through
                            </label>
                            <input
                              type="text"
                              name="valid_through"
                              id="valid_through"
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
                        </div>
                        <div className="w-1/3 px-3">
                          <div className="mb-3">
                            <label
                              htmlFor="cvv"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              id="cvv"
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
                        </div>
                        <div className="w-1/3 px-3">
                          <div className="mb-3">
                            <label
                              htmlFor="postal_code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal Code
                            </label>
                            <input
                              type="text"
                              name="postal_code"
                              id="postal_code"
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
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 space-x-3">
                      <button
                        type="button"
                        className="
                        inline-flex
                        justify-center
                        rounded-md
                        border border-transparent
                        shadow-sm
                        px-4
                        py-2
                        text-base
                        font-medium
                        text-white
                        dark-green-bg
                        hover-light-green-bg
                        focus:outline-none
                        focus:ring-0
                        sm:col-start-2
                        sm:text-sm
                      "
                        onClick={save}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="
                        mt-3
                        inline-flex
                        justify-center
                        rounded-md
                        border border-gray-300
                        shadow-sm
                        px-4
                        py-2
                        bg-white
                        text-base
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-0
                        sm:mt-0
                        sm:col-start-1
                        sm:text-sm
                      "
                        onClick={cancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PaymentModal;
