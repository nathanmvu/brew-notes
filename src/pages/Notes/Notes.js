import React, { useState } from 'react';
import API from '../../utils/API';
import './Notes.css';
import Form from '../../components/Form/Form';

function Notes(props) {
  const [title, setTitle] = useState('');
  const [beans, setBeans] = useState('');
  const [method, setMethod] = useState('');
  const [grind, setGrind] = useState('');
  const [temp, setTemp] = useState('');
  const [time, setTime] = useState('');
  const [description, setDesc] = useState('');

  function loadNotes() {
    API.getAllNotes()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  function saveNote(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(title, beans, method, grind, temp, time, description);
    API.saveNote({
      // userID: username,
      // title: title,
      // beans: beans,
      // method: method,
      // grind: grind,
      // temperature: temperature,
      // time: time,
      // description: description
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <div className='container'>
      <button type="button" className="btn btn-success btn-lg" data-toggle='modal' data-target='#noteModal'>Add new entry</button>
      <div className="card">
        <div className="card-body">
          <div className='row'>
            <div className='col-md-8'>
              Note Entry
            </div>
            <div className='col-md-4'>
              <div className='btn-group'>
                <button type="button" class="btn btn-outline-success">Favorite</button>
                <button type="button" class="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div className="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">BrewNote Entry</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id='noteForm'>
                <div className="form-group6">
                  <label for="title">Title</label>
                  <input type="text" className="form-control" id="noteTitle" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="title">Method</label>
                    <select id="text" className="form-control" value={method} onChange={(e) => setMethod(e.target.value)}>
                      <option selected>Choose...</option>
                      <option>V60</option>
                      <option>Chemex</option>
                      <option>Aeropress</option>
                      <option>Kalita Wave</option>
                      <option>French Press</option>
                      <option>Clever Dripper</option>
                      <option>Cold Brew</option>
                      <option>Siphon</option>
                      <option>Moka Pot</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Beans</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Roaster/Name" value={beans} onChange={(e) => setBeans(e.target.value)}/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label for="grindSize">Grind Size</label>
                    <input type="text" className="form-control" id="grindSize" placeholder="Coarse" value={grind} onChange={(e) => setGrind(e.target.value)} />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="temp">Temperature</label>
                    <input type="text" className="form-control" id="temp" placeholder="200F" value={temp} onChange={(e) => setTemp(e.target.value)} />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="time">Total Time</label>
                    <input type="text" className="form-control" id="time" placeholder="1:45" value={time} onChange={(e) => setTime(e.target.value)}/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter notes here..." value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={saveNote}>Save note</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes;