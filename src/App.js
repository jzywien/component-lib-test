import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import SimpleExpansionPanel from '@jzywien/component-lib/SimpleExpansionPanel';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  panel: {
    width: '50%'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

const greenTheme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgb(212,222,204)',
      main: 'rgb(103,125,79)',
      contrastText: '#fff'
    }
  },
});

const blueTheme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgb(195,207,226)',
      main: 'rgb(45,85,137)',
      contrastText: '#fff'
    }
  }
});

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

  render() {
    const {classes} = this.props;
    return (
      <div>
        <MuiThemeProvider theme={greenTheme}>
          <SimpleExpansionPanel icon="subject" title="Call Reasons" classes={{
            root: classes.panel,
          }}>
              <TextField
                select
                label="Choose Call Reason"
                onChange={this.handleChange('inputValue')}
                style={{width: '100%'}}
                id="mui-theme-input"
                value={this.state.inputValue}>
              {['One', 'Two', 'Three'].map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
              </TextField>
          </SimpleExpansionPanel>
        </MuiThemeProvider>

        <MuiThemeProvider theme={blueTheme}>
        <SimpleExpansionPanel icon="note_add" title="Call Notes" classes={{
          root: classes.panel,
          header: classes.blueHeader,
          content: classes.blueContent
        }}>
          <Grid item xs={12}>
          <textarea style={{width: '100%', minHeight: '200px', fontSize: '12pt'}} />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} variant="raised" color="primary">
              <Icon className={classes.leftIcon}>add_circle</Icon>
              SAVE NOTE
            </Button>
          </Grid>
        </SimpleExpansionPanel>
        </MuiThemeProvider>
      </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);