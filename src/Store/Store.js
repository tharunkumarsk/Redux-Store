import * as Redux from "redux";
import ReduxThunk from 'redux-thunk'
import {todos,goals,loading} from '../Reducers/AppReducer'
import {checker,logger} from '../MiddleWare/AppMiddleWare'



const store = Redux.createStore(
    Redux.combineReducers({
      todos,
      goals,
      loading
    }),Redux.applyMiddleware(ReduxThunk,checker,logger)
  );

  export {store}