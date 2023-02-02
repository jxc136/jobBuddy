import * as React from 'react';
import "./propertyPane.css";
export class PropertyPane extends React.Component {
    render() {
        return (<div className='property-panel-section'>
                
                  <div className="property-panel-content">
                    {this.props.children}
                  </div>
            </div>);
    }
}
