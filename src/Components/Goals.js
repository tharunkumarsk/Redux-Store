import React from 'react'
import List from './List'
import {addGoalAction,removeGoalAction} from '../Actions'
import {generateId} from '../GenerateID'
import * as API from '../API'

class Goals extends React.Component{

    addGoalItem = (e) => {
        e.preventDefault()
        return window.API.saveGoal(this.input.value)
        .then((goal)=>{
          this.props.store.dispatch(addGoalAction(goal))
          this.input.value = ''
        })
        .catch(() =>{
          alert("There is a problem ...Please try latter !")
        })
        
      }
      removeItem = (goal) => {
        this.props.store.dispatch(removeGoalAction(goal.id))
        window.API.deleteGoal(goal.id)
        .catch(() =>{
          this.props.store.dispatch(addGoalAction(goal))
          alert("There is an error occured ... Please try again !")
        })
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