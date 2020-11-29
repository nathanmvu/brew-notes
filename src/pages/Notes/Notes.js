import React from 'react';
import './Notes.css';

function Notes(props) {
  return (
    <div className='container'>
      <button type="button" className="btn btn-success btn-lg">Add new entry</button>
      <div className="card">
        <div className="card-body">
          Note Entry
        </div>
      </div>
    </div>
  )
}

export default Notes;