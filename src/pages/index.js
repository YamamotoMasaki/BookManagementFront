import React from 'react';
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from "react-router-dom";
import App from '../app';

export default () => (
    <MuiThemeProvider>
        <Router>
            <App />
        </Router>
    </MuiThemeProvider>
)
