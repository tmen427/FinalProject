import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">MAPA</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">Favorite</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/inputdata">Input Data</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="map.html">Map</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">SignUp</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
