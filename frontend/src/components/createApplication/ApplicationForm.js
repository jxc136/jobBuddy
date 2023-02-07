import { useState } from "react";

const AppForm = () => {
  const [job_title, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [deadline, setDeadline] = useState("");
  const [contact_person, setContact] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createApplication = { job_title, employer, contact_person };

    const response = await fetch("/api/applications", {
      method: "POST",
      body: JSON.stringify(createApplication),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setJobTitle("");
      setEmployer("");
      setDeadline("");
      setContact("");
      setError(null);
      console.log("new application added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new job application </h3>

      <label>Job Title:</label>
      <input
        type="string"
        onChange={(e) => setJobTitle(e.target.value)}
        value={job_title}
      />

      <label>Employer:</label>
      <input
        type="string"
        onChange={(e) => setEmployer(e.target.value)}
        value={employer}
      />

      <label>Deadline:</label>
      <input
        type="date"
        onChange={(e) => setDeadline(e.target.value)}
        value={deadline}
      />

      <label>Contact:</label>
      <input
        type="string"
        onChange={(e) => setContact(e.target.value)}
        value={contact_person}
      />

      <button>Add application</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AppForm;
