import React, { useState } from "react";

function FormButton() {
  const [formOpen, setFormOpen] = useState(false);

  const handleClick = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      <button onClick={handleClick}>
        {formOpen ? "Close Form" : "Open Form"}
      </button>
      {formOpen && (
        <form>
          {/* Add form inputs here */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default FormButton;
