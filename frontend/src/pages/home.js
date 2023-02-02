import { useEffect, useState } from "react";
import ApplicationsWidget from "../components/ApplicationsWidget";

const Home  = () => {
  const [applications, setApplications] = useState(null)
  useEffect(() => {
    const fetchApplications = async() => {
    const response = await fetch('/api/applications')
    const json = await response.json()
    if (response.ok) {
      setApplications(json)
    }
    }

    fetchApplications()
  }, [])
  return ( 
    <div className="Home">
      <div className="Applications">
        <h2>Applications</h2>
        <ApplicationsWidget applications={applications}/>
      </div>
    </div>
   );
}
 
export default Home ;