import React, { Component } from 'react'
import {Context} from '../Context-API/Provider'
import Todos from '../Components/Todos';

class ConnectedTodos extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(store) => {
              const { todos } = store.getState()
              return <Todos todos={todos} dispatch={store.dispatch} />
            }}
      </Context.Consumer>
    )
  }
}
export default ConnectedTodos