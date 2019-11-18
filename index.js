function todos(state=[],action){
    if(action.type === "ADD_TODO"){
        return state.concat([action.todo])
    }
    return state

}



function createStore() {

    let state;
    let listners = []

    const getState = () => state;
    const subscribe = (listner) => {
        listners.push(listner);
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }
    /**
     * Samwe as above arrow function not to confuse 
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
        subscribe
    }


}