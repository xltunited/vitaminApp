// DEPENDENCIES
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// MY FILES
import VitaminCounter from './Components/VitaminCounter/VitaminCounter';
import Menu from './Components/Menu/Menu';

class App extends Component {
  state = {

    vitaminCTotal : 0,
    vitaminDTotal : 0,

    userInputs:[],
    userInputsD:[],

    currentInput:"",
    vitaminDInput:""
  }

  getInputValue = (event) => {
    const inputTotal = event.target.value
    this.setState({
      currentInput: inputTotal,
    })
  }

  getInputValueD = (event) => {
  const inputTotalD = event.target.value
  this.setState({
    vitaminDInput: inputTotalD,
  })
}
// VITAMIN C BUTTON =================================================
  submitBtn = () => { 
  // if user does not input anything, alert them
    if (this.state.currentInput.length === 0) {
      alert(" ENTER SOMETHING, YOU FOOL! ")
      return;
    }
  // if user enters something that is not a number, alert them
    if (!Number.isInteger(parseInt(this.state.currentInput))) {
      alert("INVALID INPUT, YOU IMBECILE. NUMBERS ONLYS")
      return;
    }

  var newArray = this.state.userInputs;
  var varTotal = 0;

  newArray.push(parseInt(this.state.currentInput));
  this.setState({
    currentInput:"",
    userInputs:newArray
  });

  for (let i = 0; i < newArray.length; i++) {
    varTotal += parseInt(newArray[i]);      
  }
  if (varTotal > 2000) {
    alert ("waNnA DiE?")
  } 
  this.setState({
    vitaminCTotal : varTotal
  }) 
}

// VITAMIN D =================================================
  vitaminDBtn = () => { 
    if (this.state.vitaminDInput.length === 0) {
      alert(" ENTER SOMETHING, YOU FOOL! ")
      return;
    }
    if (!Number.isInteger(parseInt(this.state.vitaminDInput))) {
      alert("INVALID INPUT, YOU IMBECILE. NUMBERS ONLYS")
      return;
    }

  var newArray = this.state.userInputsD;
  var varTotal = 0;

  newArray.push(parseInt(this.state.vitaminDInput));
  this.setState({
    vitaminDInput:"",
    userInputsD:newArray
  });

  for (let i = 0; i < newArray.length; i++) {
    varTotal += parseInt(newArray[i]);      
  }
  if (varTotal > 2000) {
    alert ("waNnA DiE?")
  } 
  this.setState({
    vitaminDTotal : varTotal
  }) 
}

render() {
  return (
    <div>
    <Menu />
    <br></br>
    <VitaminCounter 
      submitBtn = {this.submitBtn}
      submitBtnVitaminD = {this.vitaminDBtn}

      getInputValue ={this.getInputValue}
      getInputValueVitaminD ={this.getInputValueD}

      currentInput = {this.state.currentInput}
      vitaminDInput = {this.state.vitaminDInput}


      vitaminC = {this.state.vitaminCTotal}
      vitaminD = {this.state.vitaminDTotal}
      vitaminE = {this.state.vitaminETotal}

    />
    </div>
    );
  }
}
export default App;