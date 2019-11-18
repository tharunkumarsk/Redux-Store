
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
    switch(action.type){
        case "ADD_TODO":
        return state.concat([action.todo])
        
        case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.todo.id)
        
        case "TOGGLE_TODO":
        return state.map((todo) => todo.id !== action.todo.id ? todo:
        Object.assign({},todo,{completed : !action.todo.completed})
        )
        default :
        return state

    }
    
}
function goals(state=[],action){
    switch(action.type){
        case "ADD_GOAL":
        return state.concat([action.goal])
        
        case "REMOVE_GOAL":
        return state.filter((goal) => goal.id !== action.id)

        default :
        return state

    }
    
}

//const store = createStore(goals)

/*Output if you pass goal as reducer 
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]*/

const store = createStore(todos)

/** Output if you pass todos as reducer 
 * New state value []
 *   New state value [ { id: 0, name: 'learn angular', completed: false } ]
 * New state value [ { id: 0, name: 'learn angular', completed: false },
  { id: 1, name: 'hello world java', completed: false } ]
  New state value [ { id: 1, name: 'hello world java', completed: false } ]
  New state value [ { id: 1, name: 'hello world java', completed: true } ]
 */

store.subscribe(() => {
   console.log("New state value", store.getState())
})

store.dispatch({
    type:"ADD_GOAL",
    goal:"this week full angular"
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