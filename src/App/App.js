import React from 'react';
import PropTypes from 'prop-types';
import {SimpleExpansionPanel} from '@jzywien/component-lib';
import {IconButton} from '@jzywien/component-lib';
import TextField from 'react-md/lib/TextFields/TextField';
import './App.css';

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
      <div>
      <SimpleExpansionPanel icon="subject" title="Call Reasons" count="2" headerClassName="green-header" contentClassName="green-content">
        <TextField label="Call Reason" placeholder="Choose Call Reason" />
      </SimpleExpansionPanel>
      <SimpleExpansionPanel icon="note_add" title="Call Notes" count="5" headerClassName="blue-header" contentClassName="blue-content">
        <textarea style={{width: '100%', minHeight: '250px'}}></textarea>
        <IconButton icon='add_circle' label='Save Note'/>

      </SimpleExpansionPanel>
      </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;