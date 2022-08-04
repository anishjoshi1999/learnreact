import React from 'react'
import {Link} from 'react-router-dom'
// import { ReactPropTypes } from 'react'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light"?"light":"dark"} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */} 
        <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" onClick={props.togglesMode.togglePrimaryMode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`PrimaryMode`}</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" onClick={props.togglesMode.toggleSuccessMode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`SuccessMode`}</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" onClick={props.togglesMode.toggleWarningMode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`WarningMode`}</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" onClick={props.togglesMode.toggleMode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`DarkMode`}</label>
          </div>
        </div>
      </div>
    </nav>

  )
}
//  Conditions for checking the types of props
// Navbar.ReactPropTypes = {
//     title:ReactPropTypes.string,
//     aboutText:ReactPropTypes.string
// }
