import React from 'react';
import PropTypes from 'prop-types';
import {SimpleExpansionPanel} from '@jzywien/component-lib';
import {IconButton} from '@jzywien/component-lib';
import TextField from 'react-md/lib/TextFields/TextField';
import { Grid, Cell } from 'react-md';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  handleChange(prop) {
    return (event) => {
      this.setState({[prop]: event.target.value});
    }
  };

  handleClick(prop) {
    return (event) => {
      alert('Button Clicked!');
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <Grid>
      <Cell size={8}>
      <SimpleExpansionPanel icon="phone" title="Caller Details" showCount={false} >
        <div style={{display: "flex", alignItems: "space-between"}}>
        <TextField label="First Name" style={{margin: "0px 5px"}}/>
        <TextField label="Last Name" style={{margin: "0px 5px"}}/>
        <TextField label="DOB" style={{margin: "0px 5px"}}/>
        <TextField label="Caller Type" style={{margin: "0px 5px"}}/>
        </div>
        <div style={{display: "flex", alignItems: "space-between"}}>
        <TextField label="Language Spoken" style={{margin: "0px 5px"}}/>
        <TextField label="Phone No. Calling From" style={{margin: "0px 5px"}}/>
        <TextField label="Primary Phone No" style={{margin: "0px 5px"}}/>
        <TextField label="Email" style={{margin: "0px 5px"}}/>
        </div>
        <div style={{display: "flex", alignItems: "space-between", marginBottom: "20px"}}>
        <TextField label="Program Type" style={{margin: "0px 5px"}}/>
        <TextField label="How Heard?" style={{margin: "0px 5px"}}/>
        </div>
        <div >
        <IconButton label='Authenticate Caller' showIcon={false}/>
        </div>
      </SimpleExpansionPanel>
      </Cell>
      <Cell size={4}>
      <div style={{marginBottom: "15px"}}>
      <SimpleExpansionPanel icon="subject" title="Call Reasons" count="2" lightTheme={true} headerClassName="green-header" contentClassName="green-content">
        <TextField label="Call Reason" placeholder="Choose Call Reason" />
      </SimpleExpansionPanel>
      </div>
      <div>
      <SimpleExpansionPanel icon="note_add" title="Call Notes" count="5" lightTheme={true} headerClassName="blue-header" contentClassName="blue-content">
        <textarea style={{width: '100%', minHeight: '250px'}}></textarea>
        <IconButton icon='add_circle' label='Save Note'/>

      </SimpleExpansionPanel>
      </div>
      </Cell>
      </Grid>

);
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;