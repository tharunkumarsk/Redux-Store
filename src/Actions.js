import {Constants} from './constants'

// Action Creators
function addTodoAction(todo) {
  return {
    type: Constants.ADD_TODO,
    todo
  };
}
function removeTodoAction(id) {
  return {
    type: Constants.REMOVE_TODO,
    id
  };
}
function toggleTodoAction(id) {
  return {
    type: Constants.TOGGLE_TODO,
    id
  };
}
function addGoalAction(goal) {
  return {
    type: Constants.ADD_GOAL,
    goal
  };
}
function removeGoalAction(id) {
  return {
    type: Constants.REMOVE_GOAL,
    id
  };
}

export{addTodoAction,removeTodoAction,toggleTodoAction,addGoalAction,removeGoalAction}