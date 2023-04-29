import React from "react";
import { createContext } from "react";
import A from "./components/A";

export const Fname = createContext();

const App = () => {
  return (
    <Fname.Provider value={'sajid'}>
      <A />
    </Fname.Provider>
  );
};

export default App;
