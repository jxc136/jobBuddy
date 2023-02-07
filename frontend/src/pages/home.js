import { useEffect, useState } from "react";
import ApplicationsWidget from "../components/ApplicationsWidget";
import Modal from "../components/createApplication/modal";

const Home = () => {
  const [applications, setApplications] = useState(null);
  const getApplications = useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch("/api/applications");
      const json = await response.json();
      if (response.ok) {
        json.forEach((application) => {
          // Create a new Date object from the deadline value
          const deadline = new Date(application.deadline);
          // Format the deadline as DD-MM-YYYY
          const formattedDeadline = `${deadline.getDate()}-${
            deadline.getMonth() + 1
          }-${deadline.getFullYear()}`;
          // Concatenate the deadline type to the formatted deadline
          application.deadline = ` ${application.deadline_type} Deadline: ${formattedDeadline}`;
        });
        setApplications(json);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="Home">
      <div className="Applications">
        <h2>Dashboard</h2>
        <div className="subheader-container">
          <h4 className="title-left">My Job Applications</h4>
        </div>
        {/* <AppForm /> */}
        <Modal />
        <ApplicationsWidget applications={applications} />
      </div>
    </div>
  );
};

export default Home;
