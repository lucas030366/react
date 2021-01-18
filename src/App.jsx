import React from "react"

import "./css/app.css"

import Header from "./components/header/Header"
//import Index from "./components/Index"

import Router from "./router"
import { BrowserRouter } from "react-router-dom"


export default () =>
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>