import * as Redux from "redux";
import "./index.css";

function generateId() {
  return (
    Math.random()
      .toString(36)
      .substr(2)
  );
}

// Action Types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

// Action Creators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}
function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}
function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}
function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}
function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

// Reducers
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}
function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    default:
      return state;
  }
}

function checkAndDispatch(store,action){
  if(
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes('bitcoin')
  ){
    return alert('NO ! that is a bad Idear as of now ')
  }
  if(
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes('bitcoin')
  ){
    return alert('NO ! that is a bad Idear as of now ')
  }
  return store.dispatch(action)



}
// Create the store
const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals
  }),
);

// subscribe to the listener
store.subscribe(() => {
  const { todos, goals } = store.getState();

  document.getElementById("goals").innerHTML = "";
  document.getElementById("todos").innerHTML = "";

  todos.forEach(addTodoToDOM); // todos.forEach(todo => addTodoToDOM(todo));
  goals.forEach(addGoalToDOM); // goals.forEach(goal => addGoalToDOM(goal));
});

// DOM code
function addTodo(e) {
  e.preventDefault();
  const input = document.getElementById("todo");
  const name = input.value;
  checkAndDispatch(store,
    addTodoAction({
      name,
      complete: false,
      id: generateId()
    })
  );
  input.value = "";
}

function addGoal(e) {
  e.preventDefault();
  const input = document.getElementById("goal");
  const name = input.value;
  checkAndDispatch(store,
    addGoalAction({
      id: generateId(),
      name
    })
  );
  input.value = "";
}

document.getElementById("todoForm").addEventListener("submit", addTodo);
document.getElementById("goalForm").addEventListener("submit", addGoal);

function createRemoveButton(onClick) {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.innerHTML = "X";
  removeBtn.addEventListener("click", onClick);
  return removeBtn;
}

function addTodoToDOM(todo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.id = todo.id;
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", () => {
    store.dispatch(toggleTodoAction(todo.id));
  });

  const label = document.createElement("label");
  const text = document.createTextNode(todo.name);
  label.htmlFor = todo.id;
  label.appendChild(text);
  li.appendChild(checkbox);
  li.appendChild(label);
  if (todo.complete) {
    label.classList.add("strike");
    checkbox.checked = true;
  }

  const removeBtn = createRemoveButton(() => {
    store.dispatch(removeTodoAction(todo.id));
  });
  li.appendChild(removeBtn);

  document.getElementById("todos").appendChild(li);
}

function addGoalToDOM(goal) {
  const node = document.createElement("li");
  const text = document.createTextNode(goal.name);
  node.appendChild(text);

  const removeBtn = createRemoveButton(() => {
    store.dispatch(removeGoalAction(goal.id));
  });
  node.appendChild(removeBtn);

  document.getElementById("goals").appendChild(node);
}
