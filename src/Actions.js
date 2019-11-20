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
function addAPIData(todos,goals) {
  return {
    type: Constants.ADD_API_DATA,
    todos,
    goals
  };
}
 function handleDeleteGoal(goal){
   return(dispatch) => {
    dispatch(removeGoalAction(goal.id))
        window.API.deleteGoal(goal.id)
        .catch(() =>{
          dispatch(addGoalAction(goal))
          alert("There is an error occured ... Please try again !")
        })
   }
 }

 function handleAddGoal(value){
  return(dispatch) => {
    return window.API.saveGoal(value)
    .then((goal)=>{
      dispatch(addGoalAction(goal))
    })
    .catch(() =>{
      alert("There is a problem ...Please try latter !")
    })
  }
}

 function handleDeleteTodo(todo){
   return(dispatch) => {
    dispatch(removeTodoAction(todo.id))
    window.API.deleteTodo(todo.id)
      .catch(() =>{
        dispatch(addTodoAction(todo))
        alert("There is an error occured ... Please try again !")
      })
   }
 }

 function handleToggleTodo(id){
   return(dispatch) => {
    dispatch(toggleTodoAction(id))
        window.API.saveTodoToggle(id)
        .catch(()=> {
          dispatch(toggleTodoAction(id))
          alert("There is an error occured ... Please try again !")
        })
   }
 }

 function handleAddTodo(value){
   return(dispatch) => {
    return window.API.saveTodo(value)
    .then((todo)=>{
      dispatch(addTodoAction(todo))
    })
    .catch(() =>{
      alert("There is a problem ...Please try latter !")
    })
   }
 }

export{
  addAPIData,
  handleDeleteTodo,
  handleAddTodo,
  handleToggleTodo,
  handleDeleteGoal,
  handleAddGoal
}