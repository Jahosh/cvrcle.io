import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { PlayButton, VolumeControl, Progress, Cover, Icons, Grid, Col, Row } from 'react-soundplayer/components'
import { SOUNDCLOUD_API_KEY } from '../../../../config'
import React from 'react'
import Controls from './Controls.jsx'
import TrackInfo from './TrackInfo.jsx'

const Player = ( props ) => {
  const { track, profile, itinID, contributorID, refreshPlaylist, showModal, initSoundCloudAudio, handleUpdatePlayerTime } = props
  return (
    <div>
      <SoundPlayerContainer clientId={SOUNDCLOUD_API_KEY} streamUrl={track.stream_url}>
        <TrackInfo
          track={track} 
          initSoundCloudAudio={initSoundCloudAudio}
          handleUpdatePlayerTime={handleUpdatePlayerTime}
        />
        <Controls
          handleUpdatePlayerTime={handleUpdatePlayerTime}
          track={track}
          profile={profile}
          itinID={itinID}
          contributorID={contributorID}
          refreshPlaylist={refreshPlaylist}
          showModal={showModal}
          initSoundCloudAudio={initSoundCloudAudio}
        />
      </SoundPlayerContainer>
    </div>
  );
};

export default Player;