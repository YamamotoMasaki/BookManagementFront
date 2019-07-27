import React, { Component } from 'react';
import NavBar from './components/navbar';
import List from './components/list';
import Regist from './components/regist';
import Loan from './components/loan';
import Return from './components/return';
import { Switch, Route } from "react-router-dom";

class App extends Component {
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
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        / >
        <Switch>
            <Route path='/list' exact component={List}/>
            <Route path='/regist' exact component={Regist}/>
            <Route path='/loan' exact component={Loan}/>
            <Route path='/return' exact component={Return}/>
        </Switch>
      </div>
    );
  }
}

export default App;