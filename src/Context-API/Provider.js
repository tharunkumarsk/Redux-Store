import React, { Component,createContext } from 'react'



export const Context = React.createContext()

class Provider extends React.Component {
  render () {
    return (
      <Context.Provider value={this.props.store}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export default Provider
