import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import './Notes.css';
import NoteModal from '../../components/NoteModal/NoteModal';
// import Form from '../../components/Form/Form';

function Notes({
  favoritesPage,
}) {
  // const { userID } = props; // TODO: this

  const [notes, setNotes] = useState([]);
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    note: null,
    editingNote: false,
  });

  function loadNotes() {
    API.getAllNotes(!!favoritesPage)
      .then((res) => {
        if (res.data.notes) {
          setNotes(res.data.notes);
          console.log('loaded notes', res.data.notes);
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadNotes();
  }, []);

  function favoriteNote(e, note) {
    e.preventDefault();
    e.stopPropagation();
    console.log('favorite', note);
    API.updateNote(note._id, {
      favorite: !note.favorite,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    loadNotes();
  }

  function deleteNote(e, note) {
    e.preventDefault();
    e.stopPropagation();
    console.log('delete', note);
    API.deleteNote(note._id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    loadNotes();
  }

  function newNote() {
    setModalProps({
      isOpen: true,
      note: {},
      editingNote: false,
    });
  }

  function editNote(note) {
    setModalProps({
      isOpen: true,
      note,
      editingNote: true,
    });
  }

  function closeModal() {
    setModalProps({
      isOpen: false,
      note: null,
      editingNote: false,
    });
    loadNotes();
  }

  const renderNote = (note) => {
    const { createdAt, title, favorite, beans, method, grind, temp, time, description } = note;
    return (<>
      <div className="card" onClick={() => editNote(note)}>
        <div className="card-body">
          <div className='row'>
            <div className='col-md-8'>
              <h5>{new Date(createdAt || '').toDateString()}</h5>
              <h6>{title}</h6>
              <p>Method: {method}</p>
              <p>{favorite ? 'is favorite' : ''}</p>
              {/* <a href='#' type='button' className='stretched-link' data-toggle='modal' data-target='#noteModal' /> */}
            </div>
            <div className='col-md-4'>
              <div className='btn-group'>
                <button type="button" className="btn btn-outline-success" onClick={(e) => favoriteNote(e, note)}>Favorite</button>
                <button type="button" className="btn btn-outline-danger" onClick={(e) => deleteNote(e, note)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </>
    );
  };

  // const formModal = (
  //   <div className="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
  //     <div className="modal-dialog modal-dialog-centered" role="document">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title" id="exampleModalLongTitle">BrewNote Entry</h5>
  //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //         <div className="modal-body">
  //           <form id='noteForm'>
  //             <div className="form-group6">
  //               <label for="title">Title</label>
  //               <input type="text" className="form-control" id="noteTitle" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
  //             </div>
  //             <div className="form-row">
  //               <div className="form-group col-md-6">
  //                 <label for="title">Method</label>
  //                 <select id="text" className="form-control" value={method} onChange={(e) => setMethod(e.target.value)}>
  //                   <option selected>Choose...</option>
  //                   <option>V60</option>
  //                   <option>Chemex</option>
  //                   <option>Aeropress</option>
  //                   <option>Kalita Wave</option>
  //                   <option>French Press</option>
  //                   <option>Clever Dripper</option>
  //                   <option>Cold Brew</option>
  //                   <option>Siphon</option>
  //                   <option>Moka Pot</option>
  //                 </select>
  //               </div>
  //               <div className="form-group col-md-6">
  //                 <label for="inputPassword4">Beans</label>
  //                 <input type="text" className="form-control" id="inputPassword4" placeholder="Roaster/Origin" value={beans} onChange={(e) => setBeans(e.target.value)}/>
  //               </div>
  //             </div>
  //             <div className="form-row">
  //               <div className="form-group col-md-4">
  //                 <label for="grindSize">Grind Size</label>
  //                 <input type="text" className="form-control" id="grindSize" placeholder="Coarse" value={grind} onChange={(e) => setGrind(e.target.value)} />
  //               </div>
  //               <div className="form-group col-md-4">
  //                 <label for="temp">Temperature</label>
  //                 <input type="text" className="form-control" id="temp" placeholder="200F" value={temp} onChange={(e) => setTemp(e.target.value)} />
  //               </div>
  //               <div className="form-group col-md-4">
  //                 <label for="time">Total Time</label>
  //                 <input type="text" className="form-control" id="time" placeholder="1:45" value={time} onChange={(e) => setTime(e.target.value)}/>
  //               </div>
  //             </div>
  //             <div className="form-group">
  //               <label for="exampleFormControlTextarea1">Description</label>
  //               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter notes here..." value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
  //             </div>
  //           </form>
  //         </div>
  //         <div className="modal-footer">
  //           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
  //           <button type="button" className="btn btn-primary" onClick={saveNote}>Save note</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className='container'>
      <button type="button" className="btn btn-success btn-lg" onClick={newNote}>Add new entry</button>
      {notes.map(renderNote)}
      <NoteModal {...modalProps} closeModal={closeModal} />
    </div>
  )
}

export default Notes;