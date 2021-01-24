import React from "react"

import { Provider } from "react-redux"
import store from "../../store"

import Sidebar from "./sidebar/Sidebar"
import Video from "./video/Video"

export default () => {
  return (
    <section>
      <Provider store={store}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
            <Sidebar />          
            </div>
            <div className="col">
            <Video />
            </div>
          </div>
        </div>
      </Provider>
    </section>
  )
}