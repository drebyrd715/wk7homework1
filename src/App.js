import './App.css';
import data from './models/info';
import Education from './components/Education/Education';
import Workhistory from './components/workhistory';
import Cell from "./components/Education/CellNumber";
import Email from "./components/Email";
import Name from "./components/Identity";
import { useState } from "react";

function App() {
const [info, setInfo]= useState(data)
  return (
    <>
    <h1>Contact Info</h1>
    <Name id= {info.Name} />
    <Email mail={info.Email} />
    <Cell phone={info.Phone} />
    <h1>Education</h1>
    <Education edu={info.schools} />
    <h1>Work Experience</h1>
    <Workhistory work={info.Workhistory} />
    </>
  );
}

export default App;
