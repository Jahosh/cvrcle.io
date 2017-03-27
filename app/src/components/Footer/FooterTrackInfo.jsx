import React from 'react';
import { Image, Glyphicon } from 'react-bootstrap'
import { Progress, Timer } from 'react-soundplayer/components'
import { Icon, Button, Popup } from 'semantic-ui-react'

const FooterTrackInfo = (props) => {
  const { duration, currentTime, track, soundcloudAudio } = props
  let artwork = '';
  try {
    if (track.artwork_url) {
      artwork = track.artwork_url.replace('-large', '-t500x500');
      document.getElementById('track-artwork_footer').classList.add('track-image')
    }
  } catch (err) {
    console.log(err)
  }
  return (
    <div className='text-center'>
      <h4 className='text-center'> {track.title}</h4>
      <Image id='track-artwork_footer' src={artwork} />
      <hr />
      <Glyphicon onClick={() => { soundcloudAudio.pause()}} className='play' glyph='pause' />
      <Glyphicon onClick={() => { soundcloudAudio.play() }} className='play' glyph='play' />
    </div>
  );
};

export default FooterTrackInfo;