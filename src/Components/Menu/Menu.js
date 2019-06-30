import React from 'react';
import './Menu.css';

const menu = () => {
return(
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light menuDiv">
  <h1 className="navbar-brand">VITA-MEN</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/myportfolio">My Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/myprogress">My Progress</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/vitablog">VitaBlog</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search for a vitamin" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
    </form>
  </div>
</nav>
</div>
)}

export default menu;