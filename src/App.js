import React from "react";
import './App.css';
import Header from './Header';
import NavBar from "./NavBar";
import TinderCards from "./TinderCards";


function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards/>
      <NavBar/>
    </div>
  );
}

export default App;
