import { useEffect, useState } from "react";
import ApplicationsWidget from "../components/ApplicationsWidget/ApplicationsWidget";
import { PropertyPane } from "../components/ApplicationsWidget/propetyPane/propertyPane";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import "./home.css";

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
        <div className="property-container">
        <PropertyPane title='Properties'>
          <table id="property" title="Properties">
            <tbody>
              <tr>
                <td>
                  <ButtonComponent id='addNew' className="e-btn e-dialog-add" >Add New Card</ButtonComponent>
                </td>
              </tr>
            </tbody>
            
          </table>
        </PropertyPane>
      </div>
        <ApplicationsWidget applications={applications}/>
        
      </div>
    </div>
   );
}
 
export default Home ;