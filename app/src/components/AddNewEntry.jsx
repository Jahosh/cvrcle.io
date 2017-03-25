import React, { Component } from 'react'
import EntryModal from '../containers/EntryModal.jsx'
import TrackModal from '../containers/TrackModal.jsx'
import { Button }  from 'react-bootstrap'
import { Button as Btn } from 'semantic-ui-react'

// add new entry Button

class AddNewEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      EntryModalIsClicked: false,
      TrackModalIsClicked: false,
    }
    this.toggleTrackModal = this.toggleTrackModal.bind(this)
    this.toggleEntryModal = this.toggleEntryModal.bind(this)
    this.updateEntry = this.updateEntry.bind(this)
  }

  // default state is closed modal
  toggleEntryModal() {
    this.setState({
      EntryModalIsClicked: !this.state.EntryModalIsClicked
    })
  }

  toggleTrackModal() {
    this.setState({
      TrackModalIsClicked: !this.state.TrackModalIsClicked
    })
  }

  // gets user input from child component 'EntryModal' and sets it in component state
  updateEntry(title, body) {
    this.setState({
      title: title,
      body: body
    })
  }

  render() {
    return (
      <span>
        {this.state.EntryModalIsClicked ? 
          <EntryModal 
            resetFlag={this.toggleEntryModal} 
            updateEntry={this.updateEntry}
            newEntryAdded={this.props.newEntryAdded}
          /> : ""}

        {this.state.TrackModalIsClicked ?
          <TrackModal
            resetFlag={this.toggleTrackModal}
            
          /> : "" }
        <Btn
          primary
          id={this.state.id} 
          className="entry"
          onClick={this.toggleEntryModal}>Add New Entry
        </Btn>
        {'  '}
        <Btn
          secondary
          onClick={this.toggleTrackModal}>Add A Song
        </Btn>
      </span>
    );
  }
}

export default AddNewEntry;

