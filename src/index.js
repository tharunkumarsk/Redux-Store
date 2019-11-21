import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css";
import * as API from './utils/API'
import {store} from './Store/Store'
import ConnectedApp from './Connected-Components/ConnectedApp'
import { Provider } from 'react-redux';
 

 ReactDOM.render(
   <Provider store={store}>
        <ConnectedApp />
      </Provider>,
    document.getElementById('App')
 )