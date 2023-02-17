import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { extend } from '@syncfusion/ej2-base';
import './KanbanDialogueForm.css';
import { useEffect, useState } from 'react';



function KanbanDialogFormTemplate({applications, updated, setUpdated, getApplications} ) {
  let statusCategoryData = ['Bookmarked', 'Applying', 'Applied', 'Interview', 'Offer', 'Unsuccessful'];
  let deadlineCategoryData = ['Application', 'Interview', 'Test', 'Response', 'Offer']
  const [state, setState] = React.useState(extend({}, {}, applications, true));

  const onChange = async (args,) => {  
    let key = await args.target.name;
    let value = await args.target.value;
    console.log(`id = ${applications._id}`)
    console.log(`key = ${key}, value = ${value}`)
    setState({ [key]: value });
        console.log(state);
      
        let response = fetch(`/api/applications/${applications._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [key]: value }),
    });
    if (response.status === 200) {  
      console.log(`/api/applications/${applications._id}`);
    }
  }

  let data = applications;
  return (
    <div>
      <table>
        <tbody>
        <tr>
  <td className="e-label">Job Title</td>
  <td>
    <TextBoxComponent
      id="job_title"
      name="job_title"
      className="e-field"
      placeholder="Job Title"
      inputType="text"
      value={data.job_title}
      onChange={onChange.bind(this)}
    ></TextBoxComponent>
  </td>
</tr>




          <tr>
            <td className="e-label">Employer</td>

            <td>
              <TextBoxComponent
                id="employer"
                name="employer"
                className="e-field"
                placeholder="Employer"
                inputType="text"
                applicationId={data._id}
                value={data.employer}
                onChange={onChange.bind(this)}
              ></TextBoxComponent>
            </td>
          </tr>
          
          <tr>
            <td className="e-label">Deadline</td>
            <td>
              <DatePickerComponent
                id="deadline"
                name="deadline"
                className="e-field"
                format="MM/dd/yyyy"
                value={data.deadline}
                onChange={onChange.bind(this)}
              ></DatePickerComponent>
            </td>
          </tr>

          <tr>
            <td className="e-label">Deadline Type</td>
            <td>
            <div className='control-pane'>
              <DropDownListComponent
                id="deadline_type"
                name="deadline_type"
                dataSource={deadlineCategoryData}
                className="e-field"
                placeholder="Deadline Type"
                value={data.deadline_type}
                onChange={onChange.bind(this)}
              ></DropDownListComponent>
            </div>
            </td>
          </tr>

          <tr>
            <td className="e-label">Status</td>
            <td>
            <div className='control-pane'>
              <DropDownListComponent
                id="status"
                name="status"
                dataSource={statusCategoryData}
                className="e-field"
                placeholder="Status"
                value={data.status}
                onChange={onChange.bind(this)}
              ></DropDownListComponent>
            </div>
            </td>
          </tr>
          <tr>
            <td className="e-label">Contact Person</td>

            <td>
              <TextBoxComponent
                id="contact_person"
                name="contact_person"
                className="e-field"
                placeholder="Contact"
                value={data.contact_person}
                onChange={onChange.bind(this)}
              ></TextBoxComponent>
            </td>
          </tr>
          
          <tr>
            <td className="checklist">Checklist</td>
            <td>
              <CheckBoxComponent label="Cover Letter" />
              <CheckBoxComponent label="CV Customised" />
              <CheckBoxComponent label="Interview Prep" />
        
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
export default KanbanDialogFormTemplate;