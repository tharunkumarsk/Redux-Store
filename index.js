
// Library Code

function createStore(reducer) {

    let state;
    let listners = []

    const getState = () => state;
    const subscribe = (listner) => {
        listners.push(listner);
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listners.forEach((listner) => listner())
      }
    /**
     * Same as above arrow function not to confuse 
     */

    /*var subscribe = function subscribe(listener) {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(function (l) {
                return l !== listener;
            });
        };
    };*/
    return {
        getState,
        subscribe,
        dispatch
    }


}


//app code
function todos(state=[],action){
    if(action.type === "ADD_TODO"){
        return state.concat([action.todo])
    }
    else if(action.type === "REMOVE_TODO"){
        return state.filter((todo) => todo.id !== action.todo.id)
    }
    else if(action.type === "TOGGLE_TODO"){
       return state.map((todo) => todo.id !== action.todo.id ? todo:
       Object.assign({},todo,{completed : !action.todo.completed})
       )
    }
    else{
        return state
    }
}

const store = createStore(todos)

store.subscribe(() => {
   console.log("New state value", store.getState())
})

store.dispatch({
    type:"ADD_TODO",
    todo:{
        id:0,
        name:"learn angular",
        completed:false

    }
})
store.dispatch({
    type:"ADD_TODO",
    todo:{
        id:1,
        name:"hello world java",
        completed:false

    }
})

store.dispatch({
    type:"REMOVE_TODO",
    todo:{
        id:0
    }
})

store.dispatch({
    type:"TOGGLE_TODO",
    todo:{
        id:1

    }
})