import React from 'react';
import Feed from './Feed.jsx'

const FeedList = ({ entries }) => {
  const feedMap = entries.map((entry, i) => (
    <Feed 
      key={i}
      name={entry.itinName}
      isPublic={entry.isPublic}
      isActive={entry.isActive}
      id={entry.id}
    />
    )
  )
  return (
    <div>
      { feedMap }
    </div>
  );
};

export default FeedList;