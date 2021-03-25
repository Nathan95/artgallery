import React, { useContext, useReducer } from "react";
import Form from './components/Form';
import Header from './components/Header';
import Certficates from './components/Certficates';
import Store from "./context";
import reducer from "./reducer";
import { usePersistedContext, usePersistedReducer } from "./usePersist";
import './App.css';

function App() {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    <div className="App">
      <Store.Provider value={{ state, dispatch }}>
        <Header />
        <Form />
        <Certficates />
      </Store.Provider>
    </div>
  );
}

export default App;
