import React from 'react'
import List from './List'
import {handleAddGoal,handleDeleteGoal} from '../Actions'
import * as API from '../API'

class Goals extends React.Component{

    addGoalItem = (e) => {
        e.preventDefault()
          this.props.store.dispatch(handleAddGoal(this.input.value))
          this.input.value = ''
      
      }
      removeItem = (goal) => {
        this.props.store.dispatch(handleDeleteGoal(goal))
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