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
    console.log('load notes, favorite:', favoritesPage);
    API.getAllNotes(favoritesPage)
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

  useEffect(() => {
    setNotes([]);
    loadNotes();
  }, [favoritesPage]);

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
    return (
      <div className="card" onClick={() => editNote(note)} key={createdAt}>
        <div className="card-body">
          <div className='row justify-content-between'>
            <div>
              <h5>{new Date(createdAt || '').toDateString()}</h5>
              <h6>{title}</h6>
              <p>Method: {method}</p>
              {/* <a href='#' type='button' className='stretched-link' data-toggle='modal' data-target='#noteModal' /> */}
            </div>
            <div>
              <div className='btn-group'>
                <button type="button" className={favorite ? "btn btn-success" : "btn btn-outline-success"} onClick={(e) => favoriteNote(e, note)}>Favorite</button>
                <button type="button" className="btn btn-outline-danger" onClick={(e) => deleteNote(e, note)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='container'>
      {favoritesPage ? null : <button type="button" className="btn btn-success btn-lg" onClick={newNote}>Add new entry</button>}
      {notes.map(renderNote)}
      <NoteModal {...modalProps} closeModal={closeModal} />
    </div>
  )
}

export default Notes;