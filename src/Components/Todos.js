import React from 'react'
import List from './List'
import {addTodoAction,removeTodoAction,toggleTodoAction} from '../Actions'
import {generateId} from '../GenerateID'
import * as API from '../API'

class Todos extends React.Component{
    
    addTodoItem = (e) => {
        e.preventDefault()
        return window.API.saveTodo(this.input.value)
        .then((todo)=>{
          this.props.store.dispatch(addTodoAction(todo))
          this.input.value = ''
        })
        .catch(() =>{
          alert("There is a problem ...Please try latter !")
        })
      }

      removeItem = (todo) => {
        this.props.store.dispatch(removeTodoAction(todo.id))
        window.API.deleteTodo(todo.id)
          .catch(() =>{
            this.props.store.dispatch(addTodoAction(todo))
            alert("There is an error occured ... Please try again !")
          })
      }
      
      toggleItem = (id,event) => {
        event.target.checked=!event.target.checked
        this.props.store.dispatch(toggleTodoAction(id))
        window.API.saveTodoToggle(id)
        .catch(()=> {
          this.props.store.dispatch(toggleTodoAction(id))
          alert("There is an error occured ... Please try again !")
        })
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