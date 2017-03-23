import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const FeedLoader = () => {
  return (
    <div>
      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>


      </Segment>
    </div>
  );
};

export default FeedLoader;