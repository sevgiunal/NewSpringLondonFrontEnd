import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

// Derive a pathname from PUBLIC_URL if present, else use "/"
const basename = process.env.PUBLIC_URL
  ? new URL(process.env.PUBLIC_URL).pathname || "/"
  : "/";

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
