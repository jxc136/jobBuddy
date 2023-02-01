import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { registerLicense } from '@syncfusion/ej2-base';
import './ApplicationsWidget.css';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35SdkJjWnxXdXBQQg==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEViWXhec3dcQ2VUVQ==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH9ZcHdWT2VbUUA=;MTA0NTIyM0AzMjMwMmUzNDJlMzBFMnpQM0s1d3UreDd1K0JUVGhBeDFvWkxWcjlLSFJ4UjNlT2xrYnRGazU0PQ==;MTA0NTIyNEAzMjMwMmUzNDJlMzBIMHRGeEJXeXZnOXZTcDI2YStoV2U5QUhwZGhMWDBjL0p1R3NRc0dOZVdBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWX5ed3RWRWlaVUV2;MTA0NTIyNkAzMjMwMmUzNDJlMzBPaldpUzNEVTRoNGlXTmE4blpIbGEvWTcycHU3L2ZDYkFzZWxVMm9jOHVVPQ==;MTA0NTIyN0AzMjMwMmUzNDJlMzBYeUVKclNCWElWSEROV3lZdG43aU9YNVBXRTJDR2hsVGlrbllCcEhROHM4PQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH9ZcHdWT2ddVEQ=;MTA0NTIyOUAzMjMwMmUzNDJlMzBNNG5jVjZRaENBOEtUTHZ0K2Mrcmt4aWl1SGFpSVhwanFOVEFoZllYOGpBPQ==;MTA0NTIzMEAzMjMwMmUzNDJlMzBMK3dhY1d2NUJsc0pGdHU5L0U1R1lxTWpZMEVRcnJTdXBnanRhdWNnUFNvPQ==;MTA0NTIzMUAzMjMwMmUzNDJlMzBPaldpUzNEVTRoNGlXTmE4blpIbGEvWTcycHU3L2ZDYkFzZWxVMm9jOHVVPQ==');

const ApplicationsWidget  = () => {

  let data = [
    { Id: 1, Job_title: 'Junior Software Engineer', company: 'Apple', Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.', Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5, Assignee: 'Nancy Davloio', RankId: 1 },
    { Id: 2, Job_title: 'Back End Engineer', company: 'Twitter', Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE', Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2  },
    { Id: 3, Job_title: 'Database Engineer', company: 'Spotify', Status: 'Testing', Summary: 'Fix the issues reported by the customer.', Type: 'Bug', Priority: 'Low', Tags: 'Customer', Estimate: '3.5', Assignee: 'Steven walker', RankId: 1 },
    { Id: 4, Job_title: 'Junior Platform devloper', company: 'Shopify', Status: 'Close', Summary: 'Arrange a web meeting with the customer to get the login page requirements.', Type: 'Others', Priority: 'Low', Tags: 'Meeting', Estimate: 2, Assignee: 'Michael Suyama', RankId: 1 },
    { Id: 5, Job_title: 'Devops Engineer', company: 'AirBnB', Status: 'Validate', Summary: 'Validate new requirements', Type: 'Improvement', Priority: 'Low', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert King', RankId: 1 }
];

const handleActionBegin = (args) => {
  if (args.requestType === "card-move") {
    const { data } = args;
    const card = data.data;
    const status = data.columnKey;
    // update the Status field of the card object
    card.Status = status;
    console.log(card);
    console.log(card.Status)
  }
};
  return (
     
    <div className="KanbanContainer">
       
       <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "company", headerField: "Job_title" }} actionBegin={handleActionBegin}>
            <ColumnsDirective>
            <ColumnDirective headerText="Bookmarked" keyField="Open"/>
            <ColumnDirective headerText="Applied" keyField="InProgress"/>
            <ColumnDirective headerText="Interviewing" keyField="Testing"/>
            <ColumnDirective headerText="Offer" keyField="Close"/>
            </ColumnsDirective>
        </KanbanComponent>
    </div>
  );
};

ReactDOM.render(<applicationWidget />, document.getElementById('kanban'));
export default ApplicationsWidget;
