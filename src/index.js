import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";
import * as API from './utils/API'
import {store} from './Store/Store'
import Provider from './Context-API/Provider'
import ConnectedApp from './Connected-Components/ConnectedApp'
 

 ReactDOM.render(
   <Provider store={store}>
        <ConnectedApp />
      </Provider>,
    document.getElementById('App')
 )