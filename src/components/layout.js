import React, { Component } from 'react';
import NavBar from '../components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        / >
      </MuiThemeProvider>
    );
  }
}

export default Layout