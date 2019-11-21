import React, { Component } from 'react'
import App from '../Components/App'
import {Context} from '../Providers/Provider'

class ConnectedApp extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(store) => (
          <App store={store} />
        )}
      </Context.Consumer>
    )
  }
}
export default ConnectedApp