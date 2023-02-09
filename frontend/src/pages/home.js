import { useEffect, useState } from "react";
import ApplicationsWidget from "../components/ApplicationsWidget";

import Modal from "../components/createApplication/modal";
import Footer from "../components/footer";


const Home  = ({navigate}) => {
  
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [applications, setApplications] = useState(null)
  const [updated, setUpdated] = useState(false)
  const currentUser = window.localStorage.getItem("user_id");

  const getApplications = useEffect(() => {
  
      const fetchApplications = async() => {
        const response = await fetch('/api/applications')
        const json = await response.json()
        console.log(`json = ${json}`)
        if (response.ok) {
        console.log(currentUser) 
        const filteredJson = json.filter(application => application.user._id === `${currentUser}`)
        filteredJson.forEach(application => {
        // Create a new Date object from the deadline value
        const deadline = new Date(application.deadline);
        // Format the deadline as DD-MM-YYYY
        const formattedDeadline = `${deadline.getDate()}-${deadline.getMonth() + 1}-${deadline.getFullYear()}`;
        // Concatenate the deadline type to the formatted deadline
        application.deadline = `${application.deadline_type} Deadline: ${formattedDeadline}`;
        });
        console.log(`filteredJson = ${filteredJson}`)
        setApplications(filteredJson)
        console.log(`applications = ${applications}`)
        setUpdated(false)
        }
        }
    
        fetchApplications()
    
  }, [updated])

  // const currentUserApps = applications.applications.filter(application => application.user._id === currentUser)
  
  return (
    <div className="Home">
      <div className="Applications">
        <h2>Dashboard</h2>
        <div className="subheader-container">
          <h4 className="title-left">My Job Applications</h4>
        </div>
        <Modal />
        <ApplicationsWidget applications={applications} updated={updated} setUpdated={setUpdated} getApplications={getApplications}  />
      </div>
    </div>

   );
}
 
export default Home ;
