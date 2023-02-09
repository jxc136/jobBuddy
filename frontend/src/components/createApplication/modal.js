import React, { useState } from "react";
import ReactModal from "react-modal";
import AppForm from "./ApplicationForm";
import "./modal.css";

function Modal({updated, setUpdated, getApplications}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="button-container">
      <button className="create-application"onClick={() => setIsOpen(true)}>Add Job </button>

      <ReactModal
        isOpen={isOpen}
        updated={updated} setUpdated={setUpdated} getApplications={getApplications}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        <AppForm updated={updated} setUpdated={setUpdated} getApplications={getApplications}/>
      </ReactModal>
    </div>
  );
}
export default Modal;
