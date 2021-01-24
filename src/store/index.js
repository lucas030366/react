import { createStore, combineReducers } from "redux"
import course_reducer from "../store/course/mutations"

const { course } = course_reducer

const root_reducers = combineReducers({
  course
})

export default createStore(root_reducers)






