import React, { Component } from 'react';
import './VitaminCounter.css'
import Vitamin from '../Vitamin/Vitamin';

class VitaminCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {

      vitamins:{
        "Vitamin C": {
          "units": "mg",
          "dailyDose": 2000,
          "currentDose":0,
          "input":0
        },
        "Vitamin D": {
          "units": "IU",
          "dailyDose": 150,
          "currentDose":0,
          "input":0
        }
      },
      maxIntake: 0,
      vitName:"",
      units:""
  
    }
  }

  

  inputOnChange = (event, name) => {

    event.persist();

    var vitamins = {...this.state.vitamins};

    vitamins[name].input = parseInt(event.target.value);

    this.setState({vitamins:vitamins});

  }

  addVitaminChange = (event) => {

    this.setState({[event.target.name]: event.target.value});

  }

  addVitamin = () =>{

    var vitamins = {...this.state.vitamins};

    vitamins[this.state.vitName] = {

      "units": this.state.units,
      "dailyDose": parseInt(this.state.maxIntake),
      "currentDose":0,
      "input":0

    }

    this.setState(
      {
        vitamins:vitamins,
        units:"",
        maxIntake:0,
        vitName:""
      }
    );

  }

  addSub = (operation, name) =>{

    var vitamins = {...this.state.vitamins};

    if(operation === "+"){

      vitamins[name].currentDose = parseInt(vitamins[name].currentDose) + parseInt(vitamins[name].input);

      

    } else {

      vitamins[name].currentDose = parseInt(vitamins[name].currentDose) - parseInt(vitamins[name].input);

    }

    this.setState({vitamins:vitamins});

  }

  render() {
    return(
    <div className="vitaminDiv">
        <h1 className="title"> DID YOU TAKE YOUR VITA-MINZ ? </h1>

          {/* <label htmlFor="add-vitamin">Add a Vitamin</label>
          <input id="add-vitamin" type="text"/> */}

          <br/>

          <div className="vitamin-container" style={{marginBottom:"3em"}}>

          {Object.keys(this.state.vitamins).map(vitamin => (

            <Vitamin
            key= {vitamin}
            name= {vitamin}
            max= {this.state.vitamins[vitamin]["dailyDose"]}
            current= {this.state.vitamins[vitamin]["currentDose"]}
            units= {this.state.vitamins[vitamin]["units"]}
            inputOnChange= {this.inputOnChange}
            addSub={this.addSub}
            />

          ))}

          </div>

          <input type="text" onChange={(e)=>this.addVitaminChange(e)} placeholder="Vitamin Name" name="vitName" value={this.state.vitName}/> <input type="text" onChange={(e)=>this.addVitaminChange(e)} placeholder="Units" name="units" value={this.state.units}/> <input type="number" onChange={(e)=>this.addVitaminChange(e)} placeholder="Max daily intake" name="maxIntake" value={this.state.maxIntake}/> <button className="vitaminBtn" onClick={()=>this.addVitamin()}> Add Vitamin </button>

          <br></br>
          {/* =======================   VITAMIN C   ============================ */}
          <label/>Vitamin C
          <progress  name="VitaminC" id="myProgress" value={this.props.vitaminC} max="2000" /> {this.props.vitaminC}/2000mg
          <input className="input" type="text" onChange={this.props.getInputValue} value={this.props.currentInput}/>
          <button className="vitaminBtn" onClick={()=>this.props.submitBtn(this.props.currentInput)}> Add Value - Vitamin C </button>
          <br></br><br></br> 

          {/* =======================   VITAMIN D   ============================ */}
          <label/>Vitamin D
          <progress  name="VitaminD" id="myProgress" value={this.props.vitaminD} max="2000" /> {this.props.vitaminD}/150IU
          <input className="input" type="text" onChange={this.props.getInputValueVitaminD} value={this.props.vitaminDInput}/>
          <button className="vitaminBtn" onClick={()=>this.props.submitBtnVitaminD(this.props.vitaminDInput)}> Add Value - Vitamin D </button>
          <br></br><br></br>

          {/* =======================   VITAMIN E   ============================ */}
          <label/>Vitamin E
          <progress  name="VitaminE" id="myProgress" value={this.props.vitaminE} max="150" /> /150IU
          <br></br><br></br>
      </div>
    )

  }
}

export default VitaminCounter;