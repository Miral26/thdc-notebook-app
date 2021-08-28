import LocationSideModal from "components/LocationSideModal";
import { useState } from "react";
import LocationTable from "./table";

const Locations = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <main className="flex-1">
      <div className="max-w-9xl mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl">Locations</h3>
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
            onClick={() => setShowLocationModal(!showLocationModal)}
          >
            Create
          </button>
        </div>
        <section className="mt-8 pb-16">
          <LocationTable
            editLocation={() => setShowLocationModal(!showLocationModal)}
          />
        </section>
      </div>
      <LocationSideModal
        showModal={showLocationModal}
        cancel={() => setShowLocationModal(!showLocationModal)}
        save={() => setShowLocationModal(!showLocationModal)}
      />
    </main>
  );
};

export default Locations;
