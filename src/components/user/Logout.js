/*import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {loggedOut} from '../actions/types'

class LogoutPage extends Component {

  componentWillMount() {
    this.props.dispatch(loggedOut.logout())
    this.props.router.replace('/')
  }

  render() {
    return null
  }
}
LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
}

export default withRouter(connect(null,{loggedOut})(LogoutPage))*/