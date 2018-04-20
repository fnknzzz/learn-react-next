import { bindActionCreators } from 'redux'
import { connect } from '../react-redux'
import actions from './actions'

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
