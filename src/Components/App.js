import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './Todos'
import Goals from './Goals'
import {handleInitialData} from '../ActionCreators/AppActionCreators'

class App extends React.Component{
    componentDidMount () {
      const { store } = this.props
     
        store.dispatch(handleInitialData())
  
      store.subscribe(() => this.forceUpdate())
     
    }
  
     render(){
      const { store } = this.props
      const { todos, goals,loading } = store.getState()
  
      if (loading === true) {
        return <h3>Loading...</h3>;
      }
            return (<div>
              <h1>React UI</h1>
             <Todos todos={todos} store ={store}/>
             <Goals goals={goals} store ={store}/>
            </div>)
     }  
     
   }
   export default App