import React from 'react';
import './MyPortfolio.css'

const vitamins = (props) => {
  return(
  <div className="vitaminDiv">
      <h1 className="title"> DID YOU TAKE YOUR VITA-MINZ ? </h1>
        <br></br>
        <input className="input"type="text" onChange={props.getInputValue} value={props.currentInput}/>
        <br></br><br></br>
        <button className="vitaminBtn" onClick={()=>props.submitBtn(props.currentInput)}> AddValue </button>
        <br></br><br></br>
        <label/>Vitamin C
        <progress  name="VitaminA" id="myProgress" value={props.total} max="2000" /> {props.total}/2000
        <br/>
    </div>
  )
}

export default vitamins;