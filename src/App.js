import React, { createContext } from 'react';
import './App.css';
import ContextA from './Components/ContextA';
const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
    <FirstName.Provider value={"Rajneesh"}>
      <LastName.Provider value={"Kumar"}>
      <ContextA/>
      </LastName.Provider>
    </FirstName.Provider>
    </>
  );
}

export default App;
export{ FirstName,LastName}