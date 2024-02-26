import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Form.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-mkvq77jgqhcxrvpn.us.auth0.com"
    clientId="02TS6GML7U62I21o36P2kOIgPw6M8bFp"
    authorizationParams={{
      redirect_uri: window.location.href
    }}
  >
    <BrowserRouter>
    <Form/>
 
    </BrowserRouter>
    
  </Auth0Provider>,
);
