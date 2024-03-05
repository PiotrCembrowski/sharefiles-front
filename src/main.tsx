import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="526010608199-8g8n5lckghfs8gv5m20bd7cj256qc4ep.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
  </React.StrictMode>,
)
