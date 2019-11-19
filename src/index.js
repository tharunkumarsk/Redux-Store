import * as Redux from "redux";
import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";
import {generateId} from './GenerateID'
import Todos from './Components/Todos'
import Goals from './Components/Goals'
import {Constants} from './constants'

// Reducers
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
    default:
      return state;
  }
}
//Middleware functions
const checker = (store) => (next) => (action) => {
      if( action.type === Constants.ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin') ){
        return alert('NO ! that is a bad Idear as of now ')
      }
      if( action.type === Constants.ADD_TODO){ 
        alert(`Don't forget to ${action.todo.name}!`) 
      }
      if( action.type === Constants.ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin') ){
        return alert('NO ! that is a bad Idear as of now ')
      }
      if( action.type === Constants.ADD_GOAL){ 
        alert(`That's a great
        Goal!`)
      }
      return next(action)
    }
    
const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('current action is"' ,action)
  const result = next(action)
  console.log('current state is"' ,store.getState())
  return result
  console.groupEnd()

}

// Create the store
const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals
  }),Redux.applyMiddleware(checker,logger)
);










 

  


/**
 * ------------------------------------------
 */

 

 
 class App extends React.Component{
  componentDidMount () {
    const { store } = this.props
    store.subscribe(() => this.forceUpdate())
  }

   render(){
    const { store } = this.props
    const { todos, goals } = store.getState()
          return (<div>
            <h1>React UI</h1>
           <Todos todos={todos} store ={store}/>
           <Goals goals={goals} store ={store}/>
          </div>)
   }  
   
 }
 ReactDOM.render(
   <App store ={store}/>,
    document.getElementById('App')
 )