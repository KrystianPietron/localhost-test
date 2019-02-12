import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Auth from './components/Auth'

import { store } from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <Auth>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Auth>
    </Provider>,
    document.getElementById('root')
);


