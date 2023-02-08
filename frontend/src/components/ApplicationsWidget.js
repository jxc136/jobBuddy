import * as React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { registerLicense } from '@syncfusion/ej2-base';
import './ApplicationsWidget.css';
import KanbanDialogFormTemplate from './KanbanDiaglogueForm';
import { useState, useEffect } from 'react';
const currentUser = window.localStorage.getItem("user_id"); 


// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35SdkJjWnxXdXBQQg==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEViWXhec3dcQ2VUVQ==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH9ZcHdWT2VbUUA=;MTA0NTIyM0AzMjMwMmUzNDJlMzBFMnpQM0s1d3UreDd1K0JUVGhBeDFvWkxWcjlLSFJ4UjNlT2xrYnRGazU0PQ==;MTA0NTIyNEAzMjMwMmUzNDJlMzBIMHRGeEJXeXZnOXZTcDI2YStoV2U5QUhwZGhMWDBjL0p1R3NRc0dOZVdBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWX5ed3RWRWlaVUV2;MTA0NTIyNkAzMjMwMmUzNDJlMzBPaldpUzNEVTRoNGlXTmE4blpIbGEvWTcycHU3L2ZDYkFzZWxVMm9jOHVVPQ==;MTA0NTIyN0AzMjMwMmUzNDJlMzBYeUVKclNCWElWSEROV3lZdG43aU9YNVBXRTJDR2hsVGlrbllCcEhROHM4PQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH9ZcHdWT2ddVEQ=;MTA0NTIyOUAzMjMwMmUzNDJlMzBNNG5jVjZRaENBOEtUTHZ0K2Mrcmt4aWl1SGFpSVhwanFOVEFoZllYOGpBPQ==;MTA0NTIzMEAzMjMwMmUzNDJlMzBMK3dhY1d2NUJsc0pGdHU5L0U1R1lxTWpZMEVRcnJTdXBnanRhdWNnUFNvPQ==;MTA0NTIzMUAzMjMwMmUzNDJlMzBPaldpUzNEVTRoNGlXTmE4blpIbGEvWTcycHU3L2ZDYkFzZWxVMm9jOHVVPQ==');

const ApplicationsWidget  = ({applications, updated, setUpdated, getApplications}) => {

  // Hooks 
  const [id, setId] = useState('')
  const currentUserApps = applications
  let data = applications
  console.log(data)

  const handleRemoving = async (args) => {
    const response = await fetch('/api/applications/deleteApplication', {
      method: 'POST',
      body: JSON.stringify(args.deletedRecords),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(!response.ok) {
      throw new Error("Couldn't remove the card. ")
    }
  }

  const handleCardChange = async (args) => {
    setUpdated(true)
  }

  const handleActionBegin = (args) => {
    console.log(`request type = ${args.requestType}`)
    if (args.requestType === "cardRemove") {
      handleRemoving(args)
    }
    else if (args.requestType === "cardChange"){
      handleCardChange(args)
    }
  };
  const handleDragStart = (event) => {
    setId(event.data[0]._id)
    console.log(event.data[0]._id)
    console.log(event.data[0].status)
    console.log(currentUserApps)
  }

  const handleDrop = async (event) => {
      let response = await fetch(`/api/applications/${event.data[0]._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: event.data[0].status }),
      });
      if (response.status === 201) {
              
              console.log(`updated`);
            }
  }


  const dialogTemplate = (applications) => {
    return <KanbanDialogFormTemplate applications={applications} updated={updated} setUpdated={setUpdated} getApplications={getApplications} />;
  }

  return (
     
    <div className="KanbanContainer">
       

       <KanbanComponent id="kanban" keyField="status" dataSource={data} cardSettings={{ contentField: "employer", tagsField: ('deadline_type', 'deadline'), headerField: "job_title" }} dragStart={handleDragStart.bind(this)} actionBegin={handleActionBegin} dragStop={handleDrop} dialogSettings={{ template: dialogTemplate.bind(this) }}>

            <ColumnsDirective>
            <ColumnDirective headerText="Bookmarked" keyField="Bookmarked"    />
            <ColumnDirective headerText="Applying" keyField="Applying"/>
            <ColumnDirective headerText="Applied" keyField="Applied"/>
            <ColumnDirective headerText="Interview" keyField="Interview"/>
            <ColumnDirective headerText="Offer" keyField="Offer"/>
            <ColumnDirective headerText="Unsuccessful" keyField="Unsuccessful" allowToggle="true" isExpanded="false"/>
           
            </ColumnsDirective>
        </KanbanComponent>

    </div>
  );
};

export default ApplicationsWidget;


