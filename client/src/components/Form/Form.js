import React from 'react';
//import './Form.css'

function Form() {
  return (
    <div>
      <form>
        <div className="form-group6">
          <label for="title">Title</label>
          <input type="text" className="form-control" id="noteTitle" placeholder="Title" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="title">Method</label>
            <select id="text" className="form-control">
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
            <input type="text" className="form-control" id="inputPassword4" placeholder="Roaster/Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label for="grindSize">Grind Size</label>
            <input type="text" className="form-control" id="grindSize" placeholder="Coarse" />
          </div>
          <div className="form-group col-md-4">
            <label for="temp">Temperature</label>
            <input type="text" className="form-control" id="temp" placeholder="200F" />
          </div>
          <div className="form-group col-md-4">
            <label for="time">Total Time</label>
            <input type="text" className="form-control" id="time" placeholder="1:45" />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter notes here..."></textarea>
        </div>
      </form>
    </div>
  )
}

export default Form;