import React from 'react';
import { IconButton } from '@jzywien/component-lib';
import TextField from 'react-md/lib/TextFields/TextField';
import { Button } from 'react-md';

class CallerDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  handleChange(prop) {
    return (event) => {
      this.setState({ [prop]: event.target.value });
    }
  };

  handleClick(prop) {
    return (event) => {
      alert('Button Clicked!');
    }
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "space-between" }}>
          <TextField label="First Name" style={{ margin: "0px 5px" }} />
          <TextField label="Last Name" style={{ margin: "0px 5px" }} />
          <TextField label="DOB" style={{ margin: "0px 5px" }} />
          <TextField label="Caller Type" style={{ margin: "0px 5px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "space-between" }}>
          <TextField label="Language Spoken" style={{ margin: "0px 5px" }} />
          <TextField label="Phone No. Calling From" style={{ margin: "0px 5px" }} />
          <TextField label="Primary Phone No" style={{ margin: "0px 5px" }} />
          <TextField label="Email" style={{ margin: "0px 5px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "space-between", marginBottom: "20px" }}>
          <TextField label="Program Type" style={{ margin: "0px 5px" }} />
          <TextField label="How Heard?" style={{ margin: "0px 5px" }} />
        </div>
        <div >
          <IconButton label='Authenticate Caller' showIcon={false} />
          <Button flat>Reset</Button>
        </div>
      </div>
    );
  }
}

export default CallerDetailsForm;
