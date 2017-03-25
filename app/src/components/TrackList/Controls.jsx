import React from 'react'
import { Button } from 'semantic-ui-react'
import { Glyphicon } from 'react-bootstrap'

const Controls = (props) => {
  const { soundCloudAudio } = props
  return (
    <div className='text-center'>
      <Glyphicon 
      onClick={() => {soundCloudAudio.play()}}
      className='play'
      glyph='play'
      /> 
      <Glyphicon 
      onClick={() => {soundCloudAudio.stop()}}
      className='play'
      glyph='pause'
      /> 
    </div>
  );
};

export default Controls;