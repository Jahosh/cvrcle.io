import React from 'react'
import { NavBarContainer } from '../../containers'
import { connect } from 'react-redux'
import { Header, Icon, Image, Grid, Search } from 'semantic-ui-react'
import axios from "axios"

import Feed from './Feed.jsx'
import FeedList from './FeedList.jsx'
import FeedLoader from './FeedLoader.jsx'

// default view for the app
// see /src/routes for routes for this.props.children

const SearchRender = ({ id, itinName, owner }) => {
  return (
    <Grid>
      <Grid.Row centered columns={1}>
      <div className='result' key={id}>
        <div className='main'>
          <div className='title'>{itinName}</div>
        </div>
      </div>
      </Grid.Row>
    </Grid>

  )
}

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
    this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }
  componentWillMount() {
    this.props.onFetchClick();
  }
  componentDidMount() {
  }
  render() {
    const { handleSearch, entries, results } = this.props;
    return (
      // navbar persists throughout the whole app
      <Grid>
        <Grid.Row centered columns={1}>
          <Grid.Column width={16}>
            <div>
              <Header as='h1' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>
                  itineraries
                </Header.Content>
              </Header>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={1}>
          <Grid.Column width={16}>
            <Search
              resultRenderer={SearchRender}
              onSearchChange={handleSearch}
              value={this.props.searchTerm}
              results={results}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={1}>
          <Grid.Column width={6}>
            <div>
              { this.props.isFetching ? 
                <FeedLoader /> 
              :
                <FeedList
                  entries={this.props.entries}
                />
              }
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

ExplorePage.propTypes = {

}

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile
  }
}

export default ExplorePage = connect(mapStateToProps)(ExplorePage)
