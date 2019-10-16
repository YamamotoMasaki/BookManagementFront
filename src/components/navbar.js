import React, { Component } from 'react';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import { Link } from "@reach/router"

class NavBar extends Component {
  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={() => this.props.onToggle()}
        >
          <MenuItem><Link to='/'>Home</Link></MenuItem>
          <MenuItem><Link to='/regist'>Regist</Link></MenuItem>
          <MenuItem><Link to='/loan'>Loan</Link></MenuItem>
          <MenuItem><Link to='/return'>Return</Link></MenuItem>
          <MenuItem><Link to='/list'>List</Link></MenuItem>
        </Drawer>
        <AppBar
          title="BookManagementApp"
          // onLeftIconButtonTouchTap={ () => this.props.onToggle()}
          onClick={ () => this.props.onToggle()}
        />
      </div>
    );
  }
}

export default NavBar;