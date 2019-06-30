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
    total : 0,
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
  var total = 0;

  console.log(this.state.currentInput);

  newArray.push(parseInt(this.state.currentInput));
  this.setState({
    currentInput:"",
    userInputs:newArray
  });

  for (let i = 0; i < newArray.length; i++) {
    total += parseInt(newArray[i]);      
    console.log(total);
  }

  this.setState({
    total : total
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
        total = {this.state.total}
        currentInput = {this.state.currentInput}
      />
      </div>
    );
  }
}
export default App;