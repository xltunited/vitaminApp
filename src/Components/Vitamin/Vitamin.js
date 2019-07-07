import React from 'react';
import './Vitamin.css'

const Vitamin = (props) => {
  return (

    <div className="row separate">

      <div className="col-4 offset-3 ">

          <div className="row center">

            <div className="col-4">
              {props.name}
            </div>

            <div className="col-6">
              <progress name={props.name} id={props.name} value={props.current} max={props.max} />
            </div>

            <div className="col-2">
              {props.current}/{props.max}{props.units}
            </div>

          </div>

      </div>

      <div className="col-2 center">

        <div>

          <button className="vitaminBtn" onClick={() => props.addSub("-", props.name)}>-</button>
          <input placeholder={0} style={{ width: "70px", textAlign: "center" }} className="input" type="number" onChange={(e) => props.inputOnChange(e, props.name)} />
          <button className="vitaminBtn" onClick={() => props.addSub("+", props.name, props.current)}>+</button>

        </div>

      </div>

    </div>
  )
}

export default Vitamin;