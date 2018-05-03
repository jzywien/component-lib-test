import React from 'react';
import PropTypes from 'prop-types';
import { SimpleExpansionPanel } from '@jzywien/component-lib';
import { IconButton } from '@jzywien/component-lib';
import TextField from 'react-md/lib/TextFields/TextField';
import { Grid, Cell } from 'react-md';
import greenTheme from '../themes/green';
import blueTheme from '../themes/blue';
import { ThemeProvider } from 'styled-components';
import CallerDetailsForm from '../CallerDetails/CallerDetailsForm';
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
      <Grid>
        <Cell size={8}>
          <div style={{ marginBottom: "20px" }}>
            <SimpleExpansionPanel icon="phone" title="Caller Details">
              <CallerDetailsForm />
            </SimpleExpansionPanel>
          </div>
          <div>
            <SimpleExpansionPanel icon="healing" title="Service Request">
              <div style={{ marginBottom: "20px" }}>
                The serach did not return any results.  Please expand your search criteria.
              </div>
              <div >
                <IconButton icon='add_circle' label='New Service Request' />
              </div>
            </SimpleExpansionPanel>
          </div>
        </Cell>
        <Cell size={4}>
          <div style={{ marginBottom: "15px" }}>
            <ThemeProvider theme={greenTheme}>
              <SimpleExpansionPanel icon="subject" title="Call Reasons" count="2">
                <TextField label="Call Reason" placeholder="Choose Call Reason" />
              </SimpleExpansionPanel>
            </ThemeProvider>
          </div>
          <div>
            <ThemeProvider theme={blueTheme}>
              <SimpleExpansionPanel icon="note_add" title="Call Notes" count="5">
                <textarea style={{ width: '100%', minHeight: '250px' }}></textarea>
                <IconButton icon='add_circle' label='Save Note' />
              </SimpleExpansionPanel>
            </ThemeProvider>
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