import React from 'react';
import { Feed, Icon } from 'semantic-ui-react'

const EntryFeed = (props) => {
  console.log(props, 'from entry feed');
  return (
    <div className="ui two column centered grid">
      <Feed size='large'>
        <Feed.Event>
          <Feed.Label>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              { props.name }
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
  );
};

export default EntryFeed 