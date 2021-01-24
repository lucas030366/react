import React from "react"
import { connect } from "react-redux"

const Video = ({ active_module, active_lesson }) => {
  return (
    <div>
      <h4>Módulo: {active_module.title}</h4>
      <h4>Aula: {active_lesson.title}</h4>
    </div>
  )
}

export default connect(state => ({
  active_lesson: state.course.active_lesson,
  active_module: state.course.active_module,
}))(Video)