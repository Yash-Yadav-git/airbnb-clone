import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navbar";
import Card from "./components/card";

const App = () => {
  return (
    <React.StrictMode>
      <NavBar />
      <Card />
    </React.StrictMode>
  );
};

export default App;
