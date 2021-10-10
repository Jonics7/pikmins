import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

import { DatabasesProvider } from './datasets';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
    <React.StrictMode>
        <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'login-required' }}>
            <BrowserRouter forceRefresh={supportsHistory}>
                <DatabasesProvider>
                    <App />
                </DatabasesProvider>
            </BrowserRouter>
        </ReactKeycloakProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
