import React from 'react';
import { Image } from 'react-bootstrap'
import { Progress, Timer } from 'react-soundplayer/components'

const TrackInfo = (props) => {
  const { duration, currentTime, track } = props
  let artwork = '';
  if (track.artwork_url) {
    artwork = track.artwork_url.replace('-large', '-t500x500');
    document.getElementById('track-artwork').classList.add('track-image')
  }
  return (
    <div className='text-center'>
      <h4 className='text-center'> {track.title}</h4>
      <Image id='track-artwork' src={artwork} />
      <hr />
      <Progress
        className='progress'
        innerClassName='progress-bar'
        value={(currentTime / duration) * 100 || 0 }
      > 50%
      </Progress>
    </div>
  );
};

export default TrackInfo;