import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { TrashProvider } from './contexts/TrashContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TrashProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TrashProvider>
    </AuthProvider>
  </React.StrictMode>,
);
