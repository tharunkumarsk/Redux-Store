import {Constants} from '../utils/constants'

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

export {checker,logger}