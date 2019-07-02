import React from 'react';
import './MyPortfolio.css'

const vitamins = (props) => {
  return(
  <div className="vitaminDiv">
      <h1 className="title"> DID YOU TAKE YOUR VITA-MINZ ? </h1>
        <br></br>
        
        <label/>Vitamin C
        <progress  name="VitaminC" id="myProgress" value={props.vitaminC} max="2000" /> {props.vitaminC}/2000mg
        <input className="input" type="text" onChange={props.getInputValue} value={props.currentInput}/>
        <button className="vitaminBtn" onClick={()=>props.submitBtn(props.currentInput)}> Add Value - Vitamin C </button>
        <br></br><br></br> 

        <label/>Vitamin D
        <progress  name="VitaminD" id="myProgress" value={props.vitaminD} max="2000" /> {props.vitaminD}/150IU
        <input className="input" type="text" onChange={props.getInputValueVitaminD} value={props.vitaminDInput}/>
        <button className="vitaminBtn" onClick={()=>props.submitBtnVitaminD(props.vitaminDInput)}> Add Value - Vitamin D </button>
        <br></br> <br></br>

        <label/>Vitamin E
        <progress  name="VitaminE" id="myProgress" value={props.vitaminE} max="150" /> /150IU
        <br></br> <br></br>
    </div>
  )
}

export default vitamins;