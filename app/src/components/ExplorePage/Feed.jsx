import React from 'react';
import { Feed, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'

const EntryFeed = (props) => {
  return (
    <div className="centered">
    <div className="ui two column grid">
      <Feed size='large'>
        <Feed.Event>
          <Feed.Label>
            <Icon name='travel' size='massive' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Link to={`/itinerary?itinID=${props.id}`}> { props.name } </Link>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                  create playlist
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>      
    </div>
    </div>
  );
};

export default EntryFeed 