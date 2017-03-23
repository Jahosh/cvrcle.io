import React, { PropTypes } from 'react';
import { Feed, Icon, Card } from 'semantic-ui-react'
import { Link } from 'react-router'

const EntryFeed = ({ owner, created_at, id, name }) => {
  const ownerName = `${ owner.firstName } ${ owner.lastName }`
  return (
      <Feed size='large'>
        <Feed.Event>
          <Feed.Label icon='travel'>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
             { ownerName } posted
             <Card className='explore' href={`/#/itinerary?itinID=${id}`}>
              <Card.Content>
                { name }
              </Card.Content>
             </Card>
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