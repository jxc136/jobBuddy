import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { extend } from '@syncfusion/ej2-base';
import './KanbanDialogueForm.css';
import { useEffect, useState } from 'react';



function KanbanDialogFormTemplate(applications ) {
  let categoryData = ['Bookmarked', 'Applying', 'Applied', 'Interview', 'Offer'];
  const [state, setState] = React.useState(extend({}, {}, applications, true));

  const onChange = async (args,) => {  
    let key = await args.target.name;
    let value = await args.target.value;
    console.log(`id = ${applications.applications._id}`)
    console.log(`key = ${key}, value = ${value}`)
    setState({ [key]: value });
        console.log(state);
      
        let response = fetch(`/api/applications/${applications.applications._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [key]: value }),
    });
    if (response.status === 200) {  
      console.log(`/api/applications/${applications.applications._id}`);
    }
    
  }

  let data = applications.applications;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="e-label">Job Title</td>
            <td>
              <div className="e-float-input e-control-wrapper">
                <input
                  id="job_title"
                  name="job_title"
                  type="text"
                  className="e-field"
                  value={data.job_title}
                  onChange={onChange.bind(this)}
                />
              </div>
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
                dataSource={categoryData}
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
                dataSource={categoryData}
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
                id="Contact"
                name="Contact"
                className="e-field"
                placeholder="Contact"
                value={data.contact_person}
                onChange={onChange.bind(this)}
              ></TextBoxComponent>
            </td>
          </tr>
          
          <tr>
            <td className="checklist">Interview Checklist</td>
            <td>
              <CheckBoxComponent label="Cover Letter" />
              <CheckBoxComponent label="CV customised" />
              <CheckBoxComponent label="Interview answers prepared" />
              <CheckBoxComponent label="CheckBox" />
              <CheckBoxComponent label="CheckBox" />
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
export default KanbanDialogFormTemplate;