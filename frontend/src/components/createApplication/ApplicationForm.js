import { useState } from "react";
import "./ApplicationForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AppForm = () => {
  const [job_title, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [deadline, setDeadline] = useState("");
  const [contact_person, setContact] = useState("");
  const [error, setError] = useState(null);
  const [myUser, setMyUser] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentUser = window.localStorage.getItem("user_id");

    setMyUser(`${currentUser}`);
    console.log(currentUser);
    console.log(myUser);

    const createApplication = {
      job_title,
      employer,
      contact_person,
      user: currentUser,
      status,
    };

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
      setStatus("");
      setError(null);
      console.log("new application added", json);
    }
  };

  return (
    <Form className="create-form" onSubmit={handleSubmit}>
      <h3>Add a new job application </h3>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job Title:</Form.Label>
        <Form.Control
          type="string"
          onChange={(e) => setJobTitle(e.target.value)}
          value={job_title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employer:</Form.Label>
        <Form.Control
          type="string"
          onChange={(e) => setEmployer(e.target.value)}
          value={employer}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Deadline:</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => setDeadline(e.target.value)}
          value={deadline}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact:</Form.Label>
        <Form.Control
          type="string"
          onChange={(e) => setContact(e.target.value)}
          value={contact_person}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Status:</Form.Label>
        <Form.Control
          type="string"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add application
      </Button>
      {error && <div className="error">{error}</div>}
    </Form>
  );
};

export default AppForm;
