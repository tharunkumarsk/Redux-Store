import React from 'react'
import {handleInitialData} from '../ActionCreators/AppActionCreators'
import ConnectedTodos from '../Connected-Components/ConnectedTodos';
import ConnectedGoals from '../Connected-Components/ConnectedGoals';

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
              <ConnectedTodos></ConnectedTodos>
              <ConnectedGoals></ConnectedGoals>
            </div>)
     }  
     
   }
   export default App