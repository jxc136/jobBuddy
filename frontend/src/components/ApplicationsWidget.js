import * as React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { registerLicense } from '@syncfusion/ej2-base';
import './ApplicationsWidget.css';
import KanbanDialogFormTemplate from './KanbanDiaglogueForm';
import { useState, useEffect } from 'react';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35SdkJjWnxXdXBQQg==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEViWXhec3dcQ2VUVQ==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH9ZcHdWT2VbUUA=;MTA0NTIyM0AzMjMwMmUzNDJlMzBFMnpQM0s1d3UreDd1K0JUVGhBeDFvWkxWcjlLSFJ4UjNlT2xrYnRGazU0PQ==;MTA0NTIyNEAzMjMwMmUzNDJlMzBIMHRGeEJXeXZnOXZTcDI2YStoV2U5QUhwZGhMWDBjL0p1R3NRc0dOZVdBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWX5ed3RWRWlaVUV2;MTA0NTIyNkAzMjMwMmUzNDJlMzBPaldpUzNEVTRoNGlXTmE4blpIbGEvWTcycHU3L2ZDYkFzZWxVMm9jOHVVPQ==;MTA0NTIyN0AzMjMwMmUzNDJlMzBYeUVKclNCWElWSEROV3lZdG43aU9YNVBXRTJDR2hsVGlrbllCcEhROHM4PQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH9ZcHdWT2ddVEQ=;MTA0NTIyOUAzMjMwMmUzNDJlMzBNNG5jVjZRaENBOEtUTHZ0K2Mrcmt4aWl1SGFpSVhwanFOVEFoZllYOGpBPQ==;MTA0NTIzMEAzMjMwMmUzNDJlMzBMK3dhY1d2NUJsc0pGdHU5L0U1R1lxTWpZMEVRcnJTdXBnanRhdWNnUFNvPQ==;MTA0NTIzMUAzMjMwMmUzNDJlMzBPaldpUzNEVTRoNGlXTmE4blpIbGEvWTcycHU3L2ZDYkFzZWxVMm9jOHVVPQ==');

const ApplicationsWidget  = (applications) => {

  // Hooks 
  const [isDragging, setIsDragging] = useState(false)
  const [id, setId] = useState('')

  let data = applications.applications

  const handleDragStart = (event) => {
    setId(event.data[0]._id)
    console.log(event.data[0]._id)
    console.log(event.data[0].status)
  }

  const handleDrop = async (event) => {
    console.log('card has dropped')
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

  // const handleActionBegin = (args) => {
  //   if (args.requestType === "card-move") {
  //     const { data } = args;
  //     console.log(data._id);
  //     const card = data.data;
  //     const status = data.columnKey;
  //     // update the Status field of the card object
  //     card.Status = status;
  //     console.log(card);
  //     console.log(card.Status)
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   if (event.target.getAttribute("data-button-id") === "cover-image-upload") {
  //     // do something for button 1
  //   } else {
  //     // do something for button 2

  //     event.preventDefault();
  //     console.log(`image input during handlesubmits is ${imageInput}`);
  //     if (imageInput === "") {
  //       console.log("no image input!");
  //     }
  //     const userId = window.localStorage.getItem("user_id");
  //     let response = await fetch(`/users/${userId}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ profilePicture: imageInput }),
  //     });

  //     if (response.status === 201) {
  //       setImageInput("");
  //       setIsUpdated(true);
  //       console.log(`/users/${userId}`);
  //     }
  //   }
  // };
  const dialogTemplate = (applications) => {
    return <KanbanDialogFormTemplate applications={applications} />;
  }

  return (
     
    <div className="KanbanContainer">
       
       <KanbanComponent id="kanban" keyField="status" dataSource={data} cardSettings={{ contentField: "employer", tagsField: 'deadline', headerField: "job_title" }} dragStart={handleDragStart.bind(this)} dragStop={handleDrop} dialogSettings={{ template: dialogTemplate.bind(this) }}>
            <ColumnsDirective>
            <ColumnDirective headerText="Bookmarked" keyField="Bookmarked" />
            <ColumnDirective headerText="Applying" keyField="Applying"/>
            <ColumnDirective headerText="Applying" keyField="Applied"/>
            <ColumnDirective headerText="Interview" keyField="Interview"/>
            <ColumnDirective headerText="Offer" keyField="Offer"/>
           
            </ColumnsDirective>
        </KanbanComponent>
    </div>
  );
};

export default ApplicationsWidget;


