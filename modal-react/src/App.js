import React, { useState } from "react";
import { Modal } from "./Components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(!showModal);

  return (
    <div>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        modalTitle="Modal Title"
        modalBody="New Employee"
      />
      <button onClick={() => setShowModal(true)} className="openModalBtn">
        Open Modal
      </button>
    </div>
  );
};
export default App;
