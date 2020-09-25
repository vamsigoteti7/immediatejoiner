import React from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from './components/providers/UserProvider';
import Application from './components/Application';

function App() {

  return (
    <React.Fragment>
      <ToastContainer />
      <UserProvider>
        <Application />
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
