import React, { Component } from 'react'
import App from '../Components/App'
import {Context} from '../Providers/Provider'


export default class ConnectedApp extends Component {
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
