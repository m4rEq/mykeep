import React, {Component} from 'react'

import Note from "./Note.jsx"
import NoteEditor from "./NoteEditor.jsx"
import NotesGrid from "./NotesGrid.jsx"



class App extends Component {
  handleNoteAdd(data) {
    console.log(data)
  }
  
  render () {
    return (<div>
      <h1>App</h1>
      <Note />
      <NoteEditor onNoteAdd={this.handleNoteAdd} />
      <NotesGrid />
    </div>
    )
  }
}

export default App