import {Constants} from '../utils/constants'

function todos(state = [], action) {
    switch (action.type) {
      case Constants.ADD_TODO:
        return state.concat([action.todo]);
      case Constants.REMOVE_TODO:
        return state.filter(todo => todo.id !== action.id);
      case Constants.TOGGLE_TODO:
          return state.map(todo =>
            todo.id !== action.id
            ? todo
            : Object.assign({}, todo, { complete: !todo.complete })
            );
      case Constants.ADD_API_DATA:
          return action.todos
      default:
        return state;
    }
  }
  
  function goals(state = [], action) {
    switch (action.type) {
      case Constants.ADD_GOAL:
        return state.concat([action.goal]);
      case Constants.REMOVE_GOAL:
        return state.filter(goal => goal.id !== action.id);
      case Constants.ADD_API_DATA:
        return action.goals
      default:
        return state;
    }
  }
  function loading(state = true, action) {
    switch (action.type) {
      case Constants.ADD_API_DATA:
        return false;
      default:
        return state;
    }
  }

  export {todos,goals,loading}