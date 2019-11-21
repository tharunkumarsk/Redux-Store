import React, { Component,createContext } from 'react'
import {store} from '../Store/Store'



export const Context = createContext()

export default class Provider extends Component {
 
    render() {
        return (
          <Context.Provider value={this.props.store}>
            {this.props.children}
          </Context.Provider>
        )
    }
}
