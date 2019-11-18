

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
const constants = 
    { 
        ADD_TODO :'ADD_TODO',
        REMOVE_TODO:'REMOVE_TODO',
        TOGGLE_TODO:"TOGGLE_TODO",
        ADD_GOAL:"ADD_GOAL",
        REMOVE_GOAL:"REMOVE_GOAL"
    };

function addTodoAction(todo){
return {
    type:constants.ADD_TODO,
    todo,
}
}

function removeTodoAction(id){
return {
    type:constants.REMOVE_TODO,
    id,
}
}

function toggleTodoAction(id){
return {
    type:constants.TOGGLE_TODO,
    id,
}
}
function addGoalAction(goals){
return {
    type:constants.ADD_GOAL,
    goals,
}
}

function removeGoalAction(id){
    return {
        type:constants.REMOVE_GOAL,
        id,
    }
    }

function todos(state=[],action){
    switch(action.type){
        case constants.ADD_TODO:
        return state.concat([action.todo])
        
        case constants.REMOVE_TODO:
        return state.filter((todo) => todo.id !== action.id)
        
        case constants.TOGGLE_TODO:
        return state.map((todo) => todo.id !== action.id ? todo:
        Object.assign({},todo,{completed : !action.completed})
        )
        default :
        return state

    }
    
}
function goals(state=[],action){
    switch(action.type){
        case constants.ADD_GOAL:
        return state.concat([action.goals])
        
        case constants.REMOVE_GOAL:
        return state.filter((goal) => goal.id !== action.id)

        default :
        return state

    }
    
}

function app (state = {},action){
    return {
        todos:todos(state.todos,action),
        goals:goals(state.goals,action)
    }
}   
//const store = createStore(goals)

/*Output if you pass goal as reducer 
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]
New state value [ 'this week full angular' ]*/

//const store = createStore(todos)

/** Output if you pass todos as reducer 
 * New state value []
 *   New state value [ { id: 0, name: 'learn angular', completed: false } ]
 * New state value [ { id: 0, name: 'learn angular', completed: false },{ id: 1, name: 'hello world java', completed: false } ]
 * New state value [ { id: 1, name: 'hello world java', completed: false } ]
 * New state value [ { id: 1, name: 'hello world java', completed: true } ]
 */
const store = createStore(app)

/** Output if you pass app as reducer - means a root reducer whichis combination of all reducers in the app 
 * New state value { todos: [], goals: [ 'this week full angular' ] }
 * New state value { todos: [ { id: 0, name: 'learn angular', completed: false } ],goals: [ 'this week full angular' ] }
 * New state value { todos: [ { id: 0, name: 'learn angular', completed: false },{ id: 1, name: 'hello world java', completed: false } ],goals: [ 'this week full angular' ] }
 * New state value { todos: [ { id: 1, name: 'hello world java', completed: false } ],goals: [ 'this week full angular' ] }
 * New state value { todos: [ { id: 1, name: 'hello world java', completed: true } ],goals: [ 'this week full angular' ] }
 */

 
store.subscribe(() => {
   console.log("New state value", store.getState())
})


store.dispatch(addTodoAction({
        id:0,
        name:"learn angular",
        completed:false

}))

store.dispatch(addTodoAction({
        id:1,
        name:"hello world java",
        completed:false

}))

store.dispatch(removeTodoAction(0))

store.dispatch(toggleTodoAction(1))

store.dispatch(addGoalAction({
    id:0,
    goal:"this week full angular"
}))

store.dispatch(addGoalAction({
    id:1,
    goal:"next week full of react"
}))
store.dispatch(removeGoalAction(1))