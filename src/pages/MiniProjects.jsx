import React from 'react'
import Counter from '../components/mini-projects/Counter';
import Toggle from "../components/mini-projects/Toggle";
import ControlledInput from "../components/mini-projects/ControlledInput";
import DynamicColor from "../components/mini-projects/DynamicColor";
import Timer from "../components/mini-projects/Timer";
import Form from "../components/mini-projects/Form";
import UseContext from "../components/mini-projects/useContext";
const MiniProjects = () => {
  return (
    <div>
        
      <h1
        style={{
          textAlign: "center",
          padding: "20px",
          fontWeight: "bold",
          letterSpacing: "2px",
          fontSize: "40px",
          color: "burlywood",
          textTransform: "uppercase",
        }}
      >
        Mini Projects
      </h1>
      <div className="app">
        <div className="card">
          <Counter />
        </div>
        <div className="card">
          <Toggle />
          <Timer /> 
        </div>
        <div className="card">
          <ControlledInput />
        </div>
        <div className="card">
          <DynamicColor />
        </div>
         <div className="card">
          <Form />
        </div>
         <div className="card">
          <UseContext />
        </div>
      </div>
     
    </div>
  )
}

export default MiniProjects