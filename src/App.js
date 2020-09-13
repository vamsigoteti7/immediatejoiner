import React from 'react';
import './App.css';

import UserProvider from './components/providers/UserProvider';
import Application from './components/Application';

function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
