function createStore(){

    let state;
    let listners =[]

    const getState = () => state;
    const subscribe = (listner) =>{
        listners.push(listner);
        return () => {
            listeners = listeners.filter((l) => l !== listener)
          }
    }

    return{
        getState,
        subscribe
    }


}