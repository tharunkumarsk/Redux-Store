import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";
import * as API from './utils/API'
import Provider from './Providers/Provider'
import ConnectedApp from './Connects/ConnectedApp'
import store from './Store/Store'

 
 ReactDOM.render(
      <Provider store={store}>
        <ConnectedApp />
     </Provider>,
    document.getElementById('App')
 )