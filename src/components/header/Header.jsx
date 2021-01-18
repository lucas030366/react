import React from "react"
import { Link } from "react-router-dom"


export default () =>
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h3 className="mb-0 mr-3">ReactJS</h3>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="users">Usuários</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="hooks">Hooks</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>