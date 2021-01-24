import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as CourseActions from "../../../store/actions/course"

const sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <h3>{module.title}</h3>

          <ul className="list-unstyled">
            {module.lessons.map(lesson => (
              <li key={lesson.id} className="my-2">
                {lesson.title}

                <button className="btn btn-sm btn-success ml-2"
                  onClick={() => toggleLesson(module, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

const mapStateToProps = state => ({
  modules: state.course.modules
})

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(sidebar)