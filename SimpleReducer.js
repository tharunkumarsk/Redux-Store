const state = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
  const action = {
      type:'DELETE_FLAVOR',
      flavor:"Vanilla"
  }

function appReducer(state = [], action) {
  
    if (action.type === 'DELETE_FLAVOR') {
      return state.filter(item => item.flavor !== action.flavor)
  }
    return state
    
  }

  

  console.log(appReducer(state,action))