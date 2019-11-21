import Todos from '../Components/Todos';
import { connect } from 'react-redux';


const ConnectedTodos = connect((state) => ({
  todos: state.todos
}))(Todos)


export default ConnectedTodos