import { connect } from 'react-redux'
import { checkLogin } from '../../actions/auth'
import { Explore } from '../../components'

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(checkLogin())
  }
}

const ExploreContainer = connect(
  null, // no mapStateToProps
  mapDispatchToProps)(Explore)

export default ExploreContainer