import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { extend } from '@syncfusion/ej2-base';


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
            <td className="e-label">ID</td>
            <td>
              <div className="e-float-input e-control-wrapper">
                <input
                  id="Id"
                  name="Id"
                  type="text"
                  className="e-field"
                  value={data._id}
                  disabled
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="e-label">Status</td>
            <td>
              <DropDownListComponent
                id="Category"
                name="Category"
                dataSource={categoryData}
                className="e-field"
                placeholder="Category"
                value={data.Category}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Title</td>

            <td>
              <TextBoxComponent
                id="Title"
                name="Title"
                className="e-field"
                placeholder="Title"
                value={data.Title}
              ></TextBoxComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Size</td>
            <td>
              <TextBoxComponent
                id="Size"
                name="Size"
                className="e-field"
                placeholder="Size"
                value={data.Size}
              ></TextBoxComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Description</td>
            <td>
              <div className="e-float-input e-control-wrapper">
                <textarea
                  name="Description"
                  className="e-field"
                  value={data.Description}
                  onChange={onChange.bind(this)}
                ></textarea>
              </div>
            </td>
          </tr>
          <tr>
            <td className="e-label">Deadline</td>
            <td>
              <DatePickerComponent
                id="Date"
                className="e-field"
                format="MM/dd/yyyy"
                value={data.Date}
              ></DatePickerComponent>
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

          <tr>
            <td className="Date example "> Date Example </td>
            <td>
              <DatePickerComponent
                id="Date"
                className="e-field"
                format="MM/dd/yyyy"
                value={data.Date}
              ></DatePickerComponent>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default KanbanDialogFormTemplate;