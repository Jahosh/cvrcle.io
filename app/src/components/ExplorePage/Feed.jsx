import React, { PropTypes } from 'react';
import { Feed, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'

const EntryFeed = ({ owner, created_at, id, name }) => {
  const ownerName = `${ owner.firstName } ${ owner.lastName }`
  return (
      <Feed size='large'>
        <Feed.Event>
          <Feed.Label icon='travel'>
          </Feed.Label>
          <Feed.Content>
            <Feed.Date>{ created_at } </Feed.Date>
            <Feed.Summary>
             { ownerName } shared  <Link to={`/itinerary?itinID=${id}`}> { name } </Link>
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
  );
};

Feed.propTypes = {

}

export default EntryFeed 