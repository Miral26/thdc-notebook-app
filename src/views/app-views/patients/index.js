import ClaimSideModal from "components/ClaimSideModal";
import PatientSideModal from "components/PatientSideModal";
import PaymentModal from "components/PaymentModal";
import { useState } from "react";
import PatientTable from "./table";
import ConfirmModal from "components/ConfirmModal";

const Patients = () => {
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <main className="flex-1">
      <div className="max-w-9xl mx-auto">
        <div className="hidden sm:block">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xl">Patients</h3>
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
              onClick={() => setShowPatientModal(true)}
            >
              Create
            </button>
          </div>
        </div>

        <section className="mt-8 pb-16">
          <PatientTable
            createClaim={() => setShowClaimModal(!showClaimModal)}
            editPatient={() => setShowPatientModal(!showPatientModal)}
            addPayment={() => setShowPaymentModal(!showPaymentModal)}
            deletePatient={() => setShowConfirmModal(!showConfirmModal)}
          />
        </section>
      </div>
      <PatientSideModal
        showModal={showPatientModal}
        cancel={() => setShowPatientModal(!showPatientModal)}
        save={() => setShowPatientModal(!showPatientModal)}
      />
      <ClaimSideModal
        showModal={showClaimModal}
        cancel={() => setShowClaimModal(!showClaimModal)}
        save={() => setShowClaimModal(!showClaimModal)}
      />
      <PaymentModal
        showModal={showPaymentModal}
        cancel={() => setShowPaymentModal(!showPaymentModal)}
        save={() => setShowPaymentModal(!showPaymentModal)}
      />
      <ConfirmModal
        showModal={showConfirmModal}
        cancel={() => setShowConfirmModal(!showConfirmModal)}
        save={() => setShowConfirmModal(!showConfirmModal)}
      />
    </main>
  );
};

export default Patients;
