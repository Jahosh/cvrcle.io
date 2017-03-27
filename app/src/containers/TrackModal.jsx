import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel, PageHeader, Grid, Row, Col } from 'react-bootstrap'
import { fetchTracks, playTrack, initPlayer, updatePlayer } from '../actions/soundcloud'
import { fetchEntries } from '../actions/explore'
import { connect } from 'react-redux'

import TrackList from '../components/TrackList/TrackList.jsx'
import Player from '../components/TrackList/Player.jsx'

import { Icons } from 'react-soundplayer/components'
import GOOGLE_API_KEY from '../../../config.js'

const qs = require('qs');
const { SoundCloudLogoSVG } = Icons

class TrackModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
      formTrackTitle: "",
      formAuthor: "",
      formBody: "",
      address: '',
      contributorID: '',
      
    }
    // function binds
    this.close = this.close.bind(this)
    this.handleInputchange = this.handleInputchange.bind(this)
    this.getQueryParams = this.getQueryParams.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.itinID = Number(this.getQueryParams('itinID'))
  }
  componentWillMount() {
    const { soundcloud } = this.props;

    this.props.onFetchTracksClick('Tunji Ige')
  }
  close() {
    this.setState({ showModal: false }, () => {
      this.props.resetFlag();
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const title = this.state.formTrackTitle
    this.props.onFetchTracksClick(title)
    this.setState({
      formTrackTitle: ''
    })
  }
  getQueryParams(param) {
    var query = window.location.hash.substring(1);
    var vars = query.split("?");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == param) { return pair[1]; }
    }
    return (false);
  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      let fbID = this.props.profile.user_id
      let id = fbID.split('|')
      axios.get(`http://localhost:3000/users?fbID=${id[1]}`)
        .then((res) => {
          let tmp = res.data[0]["id"]
          this.setState({
            contributorID: tmp
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  handleInputchange(e) {
    const name = e.target.name;
    const val = e.target.value;
    const obj = {};
    obj[name] = val;
    this.setState((prevState, props) => {
      return obj;
    });

    if (val.length > 4) {
      this.props.onFetchTracksClick(val)
    }
  }
  selectedTrack(track) {
    this.props.onSelectedTrack(track)
  }
  render() {
    // cssClasses and myStyles is req'd for styling location search bar
    const cssClasses = {
      root: 'form-group',
      input: 'form-control',
      autocompleteContainer: 'my-autocomplete-container'
    }
    const myStyles = {
      input: { width: '100%' },
      autocompleteContainer: { backgroundColor: 'green' },
      autocompleteItem: { color: 'black' },
      autocompleteItemActive: { color: 'blue' }
    }
    
    const { soundcloud, profile } = this.props;
    return (
      <Modal bsSize="large" dialogClassName="add-track-modal" show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
        <span className="text-center">Add A Track</span>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleFormSubmit}>
            <FormGroup>
              <ControlLabel>Track Name</ControlLabel>
              <FormControl
                name="formTrackTitle"
                onChange={this.handleInputchange}
                componentClass="input"
                value={this.state.formTrackTitle}
              />
            </FormGroup>
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleFormSubmit}
            >Search</Button>
          </form>
          <hr />

          <Player 
            track={soundcloud.selectedTrack}
            profile={profile}
            itinID={this.itinID}
            contributorID={this.state.contributorID}
            refreshPlaylist={this.props.refreshPlaylist}
            showModal={this.state.showModal}
            initSoundCloudAudio={this.props.initSoundCloudAudio}
            handleUpdatePlayerTime={this.props.onUpdatePlayerTime}
          />
          <hr />
          <TrackList
            tracks={soundcloud.tracks}
            onSelectedTrack={this.selectedTrack.bind(this)} 
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  const { tracks, isFetching } = state.soundcloud
  return {
    soundcloud: state.soundcloud,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTracksClick: (title) => {
      dispatch(fetchTracks(title))
    },
    onSelectedTrack: (track) => {
      dispatch(playTrack(track))
    },
    refreshPlaylist: () => {
      dispatch(fetchEntries())
    },
    initSoundCloudAudio: (sc_audio) => {
      dispatch(initPlayer(sc_audio))
    },
    onUpdatePlayerTime: (currentTime) => {
      dispatch(updatePlayer(currentTime))
    }
  }
}

export default TrackModal = connect(mapStateToProps, mapDispatchToProps)(TrackModal)



