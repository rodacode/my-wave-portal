import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        <h1>👋 Hey there!</h1>
        </div>

        <div className="bio">
            Hi I'm Nico and I like a lot cheese and potatoes, and also cheese.
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
