import React from "react";
import "./App.css";
import Origin from "./components/origin";
import Destination from "./components/destination";
import SideNav from "./components/sidenav";

function App() {
  return (
    <div>
      <div className="App-header">cogoport</div>
      
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="Search-Rates">Search Rates</div>
      <div className="Search"> 
        <div className="Origin">
          <Origin />
        </div>
        <div className="Destination">
          <Destination />
        </div>
      </div>
    </div>
  );
}

export default App;
