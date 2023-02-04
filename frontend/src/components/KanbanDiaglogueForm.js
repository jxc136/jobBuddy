import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { extend } from '@syncfusion/ej2-base';
import './KanbanDialogueForm.css';



function KanbanDialogFormTemplate(applications) {
  let categoryData = ['Bookmarked', 'Applying', 'Applied', 'Interview', 'Offer'];
  const [state, setState] = React.useState(extend({}, {}, applications, true));
  function onChange(args) {
    let key = args.target.name;
    let value = args.target.value;
    setState({ [key]: value });
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
                value={data.employer}
              ></TextBoxComponent>
            </td>
          </tr>
          
          <tr>
            <td className="e-label">Deadline</td>
            <td>
              <DatePickerComponent
                id="Date"
                className="e-field"
                format="MM/dd/yyyy"
                value={data.deadline}
              ></DatePickerComponent>
            </td>
          </tr>

          <tr>
            <td className="e-label">Deadline Type</td>
            <td>
            <div className='control-pane'>
              <DropDownListComponent
                id="Deadline Type"
                name="Deadline Type"
                dataSource={categoryData}
                className="e-field"
                placeholder="Deadline Type"
                value={data.deadline_type}
              ></DropDownListComponent>
            </div>
            </td>
          </tr>

          <tr>
            <td className="e-label">Status</td>
            <td>
            <div className='control-pane'>
              <DropDownListComponent
                id="Status"
                name="Status"
                dataSource={categoryData}
                className="e-field"
                placeholder="Status"
                value={data.status}
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