import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import './NoteModal.css';
// import Form from '../../components/Form/Form';

function Notes(props) {
  const { note, isOpen, editingNote, closeModal } = props;

  const [title, setTitle] = useState('');
  const [beans, setBeans] = useState('');
  const [method, setMethod] = useState('');
  const [grind, setGrind] = useState('');
  const [temp, setTemp] = useState('');
  const [time, setTime] = useState('');
  const [description, setDesc] = useState('');

  useEffect(() => {
    console.log('note changed', note);
    if (note) {
      const {
        title: titleProp,
        beans: beansProp,
        method: methodProp,
        grind: grindProp,
        temp: tempProp,
        time: timeProp,
        description: descriptionProp,
      } = note;

      setTitle(titleProp || '');
      setBeans(beansProp || '');
      setMethod(methodProp || '');
      setGrind(grindProp || '');
      setTemp(tempProp || '');
      setTime(timeProp || '');
      setDesc(descriptionProp || '');
    }
  }, [note]);

  function saveNote(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(title, beans, method, grind, temp, time, description);
    API.saveNote({
      title: title,
      beans: beans,
      method: method,
      grind: grind,
      temp: temp,
      time: time,
      description: description,
      createdAt: new Date(),
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    closeModal();
  };

  function updateNote(event) {
    event.preventDefault();
    API.updateNote(note._id, {
      title: title,
      beans: beans,
      method: method,
      grind: grind,
      temp: temp,
      time: time,
      description: description
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    closeModal();
  }

  return (<>
    {isOpen ? <div className="modal-backdrop show"></div> : null}
    <div className="modal" style={isOpen ? {display: 'block'} : {}} id="formModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">BrewNote Entry</h5>
            <button type="button" className="close" onClick={closeModal} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form id='noteForm'>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="noteTitle" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="method">Method</label>
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
                  <label htmlFor="beans">Beans</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Roaster/Origin" value={beans} onChange={(e) => setBeans(e.target.value)}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="grindSize">Grind Size</label>
                  <input type="text" className="form-control" id="grindSize" placeholder="Coarse" value={grind} onChange={(e) => setGrind(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="temp">Temperature</label>
                  <input type="text" className="form-control" id="temp" placeholder="200F" value={temp} onChange={(e) => setTemp(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="time">Total Time</label>
                  <input type="text" className="form-control" id="time" placeholder="1:45" value={time} onChange={(e) => setTime(e.target.value)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter notes here..." value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
            <button type="button" className="btn btn-primary" onClick={note?._id ? updateNote : saveNote}>Save note</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );

  // const noteModal = (
  //   <div className="modal show" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  //       <div className="modal-dialog modal-dialog-centered" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title" id="exampleModalLongTitle">BrewNote Entry</h5>
  //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             <form id='noteForm'>
  //               <div className="form-group6">
  //                 <label htmlFor="title">Title</label>
  //                 <input 
  //                   type="text"
  //                   readonly
  //                   className="form-control-plaintext" 
  //                   id="noteTitle"
  //                   value={title} 
  //                   onChange={(e) => setTitle(e.target.value)} 
  //                 />
  //               </div>
  //               <div className="form-row">
  //                 <div className="form-group col-md-6">
  //                   <label htmlFor="title">Method</label>
  //                   <input 
  //                     id="text"
  //                     readonly
  //                     className="form-control-plaintext" 
  //                     value={method}
  //                     onChange={(e) => setMethod(e.target.value)}
  //                   />
  //                 </div>
  //                 <div className="form-group col-md-6">
  //                   <label htmlFor="inputPassword4">Beans</label>
  //                   <input 
  //                     type="text" 
  //                     readonly
  //                     className="form-control-plaintext" 
  //                     id="inputPassword4" 
  //                     value={beans} 
  //                     onChange={(e) => setBeans(e.target.value)}/>
  //                 </div>
  //               </div>
  //               <div className="form-row">
  //                 <div className="form-group col-md-4">
  //                   <label htmlFor="grindSize">Grind Size</label>
  //                   <input 
  //                     type="text" 
  //                     readonly
  //                     className="form-control-plaintext" 
  //                     id="grindSize" 
  //                     value={grind} 
  //                     onChange={(e) => setGrind(e.target.value)} 
  //                   />
  //                 </div>
  //                 <div className="form-group col-md-4">
  //                   <label htmlFor="temp">Temperature</label>
  //                   <input 
  //                     type="text" 
  //                     readonly
  //                     className="form-control-plaintext" 
  //                     id="temp" 
  //                     value={temp} 
  //                     onChange={(e) => setTemp(e.target.value)}
  //                   />
  //                 </div>
  //                 <div className="form-group col-md-4">
  //                   <label htmlFor="time">Total Time</label>
  //                   <input 
  //                     type="text" 
  //                     readonly
  //                     className="form-control-plaintext" 
  //                     id="time" 
  //                     value={time} 
  //                     onChange={(e) => setTime(e.target.value)}
  //                   />
  //                 </div>
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="exampleFormControlTextarea1">Description</label>
  //                 <textarea 
  //                   readonly
  //                   className="form-control-plaintext" 
  //                   id="description" 
  //                   rows="3" 
  //                   value={description} 
  //                   onChange={(e) => setDesc(e.target.value)}
  //                 >
  //                 </textarea>
  //               </div>
  //             </form>
  //           </div>
  //           <div className="modal-footer">
  //             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
  //             <button type="button" className="btn btn-primary" onClick={saveNote}>Save note</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  // );
}

export default Notes;