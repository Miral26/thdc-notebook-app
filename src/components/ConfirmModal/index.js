/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

const ConfirmModal = (props) => {
  const { showModal = false, cancel, save } = props;

  return (
    <Transition.Root as={Fragment} show={showModal}>
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        onClose={cancel}
      >
        <div
          class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block
          sm:p-0
        "
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <Dialog.Overlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="
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
              sm:max-w-lg
              sm:w-full
              sm:p-6
            "
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="
                  mx-auto
                  flex-shrink-0 flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  bg-red-100
                  sm:mx-0
                  sm:h-10
                  sm:w-10
                "
                >
                  <ExclamationIcon
                    class="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div class="mt-2">
                    <p class="text-lg text-gray-500">
                      You won't be able to revert this!
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  px-4
                  py-2
                  bg-red-600
                  text-base
                  font-medium
                  text-white
                  hover:bg-red-700
                  focus:outline-none
                  focus:ring-0
                  sm:ml-3
                  sm:w-auto
                  sm:text-sm
                "
                  onClick={save}
                >
                  Yes, delete it!
                </button>
                <button
                  type="button"
                  class="
                  mt-3
                  w-full
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
                  sm:w-auto
                  sm:text-sm
                "
                  onClick={cancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ConfirmModal;
