import React from 'react'
import List from './List'
import {handleDeleteTodo,handleAddTodo,handleToggleTodo} from '../ActionCreators'

class Todos extends React.Component{
    
    addTodoItem = (e) => {
        e.preventDefault()
        this.props.store.dispatch(handleAddTodo(
          this.input.value,
          ()=> this.input.value =''))
      }

      removeItem = (todo) => {
        this.props.store.dispatch(handleDeleteTodo(todo))
      }
      
      toggleItem = (id,event) => {
        event.target.checked=!event.target.checked
        this.props.store.dispatch(handleToggleTodo(id))
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