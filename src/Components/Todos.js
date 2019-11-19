import React from 'react'
import List from './List'
import {addTodoAction,removeTodoAction,toggleTodoAction} from '../Actions'
import {generateId} from '../GenerateID'

class Todos extends React.Component{
    
    addTodoItem = (e) => {
        e.preventDefault()
        const name = this.input.value
        this.input.value = ''
        this.props.store.dispatch(addTodoAction({
          id: generateId(),
          name,
          complete: false,
        }))
      }
      removeItem = (todo) => {
        this.props.store.dispatch(removeTodoAction(todo.id))
      }
      
      toggleItem = (id) => {
        this.props.store.dispatch(toggleTodoAction(id))
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