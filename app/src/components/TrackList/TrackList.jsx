import React from 'react'
import Track from './Track.jsx'
import { Card } from 'semantic-ui-react'

const TrackList = ({ tracks, onSelectedTrack }) => {
  const trackList = tracks.map((track, i) => {
    const { artwork_url, title } = track
    if (!artwork_url) {
      return;
    }
    return (
      <Track key={i} track={track} onSelectedTrack={onSelectedTrack} artwork={artwork_url} title={title} />
    )
  })
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>
            Results
          </Card.Header>
        </Card.Content>
      <Card.Content>
        { trackList }
      </Card.Content>
    </Card>
  </div>
  )
}
export default TrackList;