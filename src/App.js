// DEPENDENCIES
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// MY FILES
import Vitamins from './Components/MyPortfolio/MyPortfolio';
import Menu from './Components/Menu/Menu';

class App extends Component {
  state = {
    vitamins : [],
    stateTotal : 0,
    userInputs:[],
    currentInput:""
  }

  getInputValue = (event) => {
    const inputTotal = event.target.value
    console.log(inputTotal)

    this.setState({
      currentInput: inputTotal
    })
  }

  submitBtn = () => { 
  // if user does not input anything, alert them
    if (this.state.currentInput.length === 0) {
      console.log('EMPTY INPUT');
      alert(" ENTER SOMETHING, YOU FOOL! ")
      return;
    }
  // if user enters something that is not a number, alert them
    if (!Number.isInteger(parseInt(this.state.currentInput))) {
      alert("INVALID INPUT, YOU IMBECILE. NUMBERS ONLYS")
      console.log('GIVE ME A NUMBER');
      return;
    }

  var newArray = this.state.userInputs;
  var varTotal = 0;

  console.log(this.state.currentInput);

  newArray.push(parseInt(this.state.currentInput));
  this.setState({
    currentInput:"",
    userInputs:newArray
  });

  for (let i = 0; i < newArray.length; i++) {
    varTotal += parseInt(newArray[i]);      
    console.log(varTotal);
  }

  this.setState({
    stateTotal:varTotal
  }) 
}

  render() {
    return (
      <div>
      <Menu />
      <br></br>
      <Vitamins 
        submitBtn = {this.submitBtn}
        getInputValue ={this.getInputValue}
        total = {this.state.stateTotal}
        currentInput = {this.state.currentInput}
      />
      </div>
    );
  }
}
export default App;