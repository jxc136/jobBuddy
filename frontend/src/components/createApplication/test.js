import React, { useState } from "react";
import ReactModal from "react-modal";
import AppForm from "./ApplicationForm";

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Job </button>

      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        <AppForm />
      </ReactModal>
    </div>
  );
}
export default Example;
