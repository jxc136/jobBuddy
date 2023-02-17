import { useState } from "react";
import "./ApplicationForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AppForm = () => {
  const [job_title, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [deadline, setDeadline] = useState("");
  const [deadline_type, setDeadlineType] = useState("");
  const [contact_person, setContact] = useState("");
  const [error, setError] = useState(null);
  const [myUser, setMyUser] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async ( { e, updated, setUpdated, getApplications}) => {
    
    const currentUser = window.localStorage.getItem("user_id");

    setMyUser(`${currentUser}`);
    console.log(currentUser);
    console.log(myUser);
    

  const createApplication = {};

  if (job_title) {
    createApplication.job_title = job_title;
  } else {
    setError("Please enter job title");
    return;
  }

  if (employer) {
    createApplication.employer = employer;
  }

  if (deadline) {
    createApplication.deadline = deadline;
  }

  if (deadline_type) {
    createApplication.deadline_type = deadline_type;
  }

  if (contact_person) {
    createApplication.contact_person = contact_person;
  }

  if (currentUser) {
    createApplication.user = currentUser;
  }

  if (status) {
    createApplication.status = status;
  } else {
    setError("Please enter status");
    return;
  }


    // const createApplication = {
    //   job_title,
    //   employer,
    //   contact_person,
    //   deadline,
    //   deadline_type,
    //   user: currentUser,
    //   status,
    // };

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
      setDeadlineType("");
      setContact("");
      setStatus("");
      setError(null);
      console.log("new application added", json);
      await setUpdated(true)
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
          required
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
        <Form.Label>Deadline Type:</Form.Label>
        <Form.Control as="select" value={deadline_type} onChange={(e) => setDeadlineType(e.target.value)} >
          <option disabled value="">Enter Deadline Type</option>
          <option value="Application">Application</option>
          <option value="Interview">Interview</option>
          <option value="Test">Test</option>
          <option value="Response">Response</option>  
          <option value="Offer">Offer</option>
        </Form.Control>
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Status:</Form.Label>
        <Form.Control as="select" value={status} required onChange={(e) => setStatus(e.target.value)}>
        <option disabled value="">Enter Deadline Type</option>
        <option value="Bookmarked">Bookmarked</option>
        <option value="Applying">Applying</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add application
      </Button>
      {error && <div className="error">{error}</div>}
    </Form>
  );
};

export default AppForm;
