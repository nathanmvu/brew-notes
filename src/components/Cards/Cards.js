import React from 'react';
import methods from  '../../methods.json';
import './Cards.css'

function Cards() {
  return (
    <div class='container'>
      <div class="d-flex justify-content-center">
        <h3>Popular Brew Methods</h3>
      </div>
      <div className='row'>
        {methods.map(method => 
        <div key={method.id} class="card-deck">
          <div class='card'>
            <img src={method.image} class="card-img-top" alt={method.name} />
            <div class="card-body">
              <h5 class="card-title">{method.name}</h5>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Cards;