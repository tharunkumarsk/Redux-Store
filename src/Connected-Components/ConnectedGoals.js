import Goals from '../Components/Goals';
import { connect } from 'react-redux';


const ConnectedGoals = connect((state) => ({
  goals: state.goals
}))(Goals)

export default ConnectedGoals