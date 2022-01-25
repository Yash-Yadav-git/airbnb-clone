import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navbar";
import Card from "./components/card";
import data from "./data.js";

const App = () => {
  const Data = data.map((x) => {
    return <Card key={x.id} item={x} />;
  });

  return (
    <React.StrictMode>
      <NavBar />
      {Data}
    </React.StrictMode>
  );
};

export default App;
