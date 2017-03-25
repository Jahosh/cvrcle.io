import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react'

const Track = (props) => {
  return (
    <div onClick={ () => { props.onSelectedTrack(props.track) }}>
    <Feed>
      <Feed.Event>
        <Feed.Label image={props.artwork} />
        <Feed.Content>
          {props.title}
        </Feed.Content>
      </Feed.Event>
    </Feed>
    </div>
  );
};

export default Track;