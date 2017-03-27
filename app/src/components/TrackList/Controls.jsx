import React, { Component } from 'react'
import { Icon, Button, Popup } from 'semantic-ui-react'
import { Glyphicon } from 'react-bootstrap'
import axios from 'axios'

import { default as swal } from 'sweetalert2'

const qs = require('qs');

class Controls extends Component {
  constructor(props) {
    super(props)
    //init soundCloudAudio instance to globalStore here
    const { initSoundCloudAudio, soundCloudAudio } = this.props
    initSoundCloudAudio(soundCloudAudio);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    const { playing, handleUpdatePlayerTime, currentTime } = this.props
    if (playing && nextProps.currentTime > currentTime ) {
      handleUpdatePlayerTime(currentTime)
    }
  }
  togglePlay() {
    const { playing, soundCloudAudio } = this.props
    if (playing) {
      soundCloudAudio.pause()
    } else {
      soundCloudAudio.play()
    }
  }
  addTrack(track) {
    // itin name needed
    const { profile, itinID, contributorID } = this.props
    const { artwork_url, title, stream_url } = track
    const payload = {
      ownerID: contributorID,
      itinID,
      name: title,
      artwork: artwork_url,
      stream_url
    }
    axios.post('http://localhost:3000/track', qs.stringify(payload))
      .then(response => { 
        if (response.status === 200) {
          swal(
            'Nice!',
            'track added to playlist',
            'success'
          )
          this.props.refreshPlaylist()
        }
      })
      .catch(err => { console.log(err) })
  }
  render() {
    const { track, playing, currentTime, handleUpdatePlayerTime, soundCloudAudio, } = this.props;
    const playPause = playing ? <Glyphicon className='play' glyph='pause' /> 
      : <Glyphicon className='play' glyph='play' />
    // this.props.showModal ? '' : soundCloudAudio.pause()
    return (
      <div>
        <div onClick={this.togglePlay.bind(this)} className='text-center'>
          { playPause }
        </div>
        <hr />
        <div className='text-center'>
        <Popup
            trigger={<Button onClick={() => this.addTrack(track)} icon='add' />}
          content='Add track to playlist'
        />
        </div>
      </div>
    );
  }
};

export default Controls;