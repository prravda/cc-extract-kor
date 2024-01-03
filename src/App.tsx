import React from "react";
import "./App.css";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>[ Internal Tool for i18n ]</h1>
        <h2>1. Paste the code what you want to extract Korean characters</h2>
        <Input />
        <h1> - </h1>
      </header>
    </div>
  );
}

export default App;
