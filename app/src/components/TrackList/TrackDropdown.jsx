import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const dummyData = [
  {
    text: 'Chance The Rapper',
    value: 'Title here',
    image: 'image here'
  }
]


const PlaylistDropdown = (props) => {
  const { entries, itinID } = props
  const tracks = entries.map(entry => {
    return entry.tracks
  })
  const data = [].concat.apply([], tracks);
  const currentItin = data.filter(track => {
    if (itinID === track.itinID) {
      return track
    }
  })
  const finalizedData = currentItin.map(track => {
    return {
      text: track.name,
      value: track.name,
      image: track.artwork,
    }
  });
  return (
    <div>
    {finalizedData.length ?
      <Dropdown 
      onClick={(e, d) => { console.log(e, d) }}
      onLabelClick={(e, d) => { console.log(e, d) }}
      options={['text']}
      placeholder='playlist' 
      fluid selection search options={finalizedData} />  
    : '' }  
    </div>
  );
};

export default PlaylistDropdown;