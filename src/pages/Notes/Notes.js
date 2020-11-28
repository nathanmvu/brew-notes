import React from 'react';
import './Notes.css';

function Notes(props) {
  return (
    <div className='container'>
      <button type="button" class="btn btn-success btn-lg">Add new entry</button>
      <div class="card">
        <div class="card-body">
          Note Entry
        </div>
      </div>
    </div>
  )
}

export default Notes;