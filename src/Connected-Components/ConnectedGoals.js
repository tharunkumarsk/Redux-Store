import React, { Component } from 'react'
import {Context} from '../Context-API/Provider'
import Goals from '../Components/Goals';

class ConnectedGoals extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(store) => {
              const { goals } = store.getState()
              return <Goals goals={goals} dispatch={store.dispatch} />
            }}
      </Context.Consumer>
    )
  }
}
export default ConnectedGoals