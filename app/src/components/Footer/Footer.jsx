import React from 'react';

import FooterTrackInfo from './FooterTrackInfo.jsx'

const Footer = (props) => {
  const { soundcloud, soundcloudAudio,
    profile, 
  } = props
  console.log('footer props', props)
  return (
    <div>
    { soundcloud.soundcloudAudio ? 
      <FooterTrackInfo
        track={soundcloud.selectedTrack}
        duration={soundcloud.soundcloudAudio.audio.duration}
        currentTime={soundcloud.currentPlayerTime}
        soundcloudAudio={soundcloud.soundcloudAudio}
      />
      : '' }
    </div>
  );
};

export default Footer;