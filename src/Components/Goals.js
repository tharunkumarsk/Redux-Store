import React from 'react'
import List from './List'
import {addGoalAction,removeGoalAction} from '../Actions'
import {generateId} from '../GenerateID'

class Goals extends React.Component{

    addGoalItem = (e) => {
        e.preventDefault()
        const name = this.input.value
        this.input.value = ''
        this.props.store.dispatch(addGoalAction({
          id: generateId(),
          name,
        }))
      }
      removeItem = (goal) => {
        this.props.store.dispatch(removeGoalAction(goal.id))
      }
    render(){
           return (
            <div>
            <h1>Goals</h1>
            <form id="goalForm">
            <input 
            type="text" 
            placeholder="Add Todo" 
            required 
            ref={(input) => this.input = input}/>
            <button 
            onClick={this.addGoalItem}>Add Goal</button>
            </form>
            <List
              items={this.props.goals}
              remove={this.removeItem}/>
            </div>
            )
            
    }  
  }

  export default Goals