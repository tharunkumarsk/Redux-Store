import React from 'react'
import List from './List'
import {handleDeleteTodo,handleAddTodo,handleToggleTodo} from '../ActionCreators/AppActionCreators'

class Todos extends React.Component{
    
    addTodoItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddTodo(
          this.input.value,
          ()=> this.input.value =''))
      }

      removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
      }
      
      toggleItem = (id,event) => {
        event.target.checked=!event.target.checked
        this.props.dispatch(handleToggleTodo(id))
      }

    render(){
           return (
            <div>
            <h1>Todo List</h1>
            <form id="todoForm">
            <input 
            type="text" 
            placeholder="Add Todo" 
            required 
            ref={(input) => this.input = input}/>
            <button 
            onClick={this.addTodoItem}>Add Todo</button>
            </form>
            <List
            items={this.props.todos}
            remove={this.removeItem}
            toggle={this.toggleItem}
           />
           
            </div>
            )
            
    }  
  }

  export default Todos