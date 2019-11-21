import App from '../Components/App'
import { connect } from 'react-redux';


const ConnectedApp = connect((state) => ({
  loading: state.loading
}))(App)

export default ConnectedApp