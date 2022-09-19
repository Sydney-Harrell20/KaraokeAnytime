import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import { ThemeProvider } from '@material-ui/core'
import theme from './theme.js'
import { ContextProvider } from './SocketContext.js';
import './styles.css';


ReactDOM.render(
    <ContextProvider>
        <App />,
    </ContextProvider>,
    //<ThemeProvider theme={theme}>

    //</ThemeProvider>,
    document.getElementById('root'),
);