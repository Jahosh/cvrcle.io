import React from 'react'
import { NavBarContainer } from '../../containers'
import Footer from '../../containers/Footer/Footer.js'

const FooterContainer = (
  <footer className="Footer">
    asdas
            <audio control auto play loop>// it will loop through the music file
      <source src="alam.mp3" type="audio/mpeg" />
      <source src="alam1.mp3" type="audio/mpeg" />
    </audio>
  </footer>
)

// default view for the app
// see /src/routes for routes for this.props.children

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  render() {
    return(
      // navbar persists throughout the whole app
      <div>
        <NavBarContainer />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  checkLogin: React.PropTypes.func.isRequired
}

export default App
