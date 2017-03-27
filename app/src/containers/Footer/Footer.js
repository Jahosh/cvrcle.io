import { connect } from 'react-redux'
import { loginRequest, logoutSuccess } from '../../actions/auth'
import Footer from '../../components/Footer/Footer.jsx'
import { hashHistory } from 'react-router'
import { checkLogin } from '../../actions/auth'

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  const soundcloud = state.soundcloud
  return {
    isAuthenticated,
    profile,
    soundcloud,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => {
      dispatch(checkLogin())
    }
  }
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default FooterContainer
