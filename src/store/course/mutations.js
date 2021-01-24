import state from "./state"

const course = (any, actions) => {
  if (actions.type == "TOGGLE_LESSON") {
    return {
      ...state,
      active_lesson: actions.lesson,
      active_module: actions.module,
    }
  }

  return state
}

export default {
  course
}