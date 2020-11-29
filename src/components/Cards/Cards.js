import React from 'react';
import methods from  '../../methods.json';
import './Cards.css'

function Cards() {
  return (
    <div className='container'>
      <div className="d-flex justify-content-center">
        <h3>Popular Brew Methods</h3>
      </div>
      <div className='row'>
        {methods.map(method => 
        <div key={method.id} className="card-deck">
          <div className='card'>
            <img src={method.image} className="card-img-top" alt={method.name} />
            <div className="card-body">
              <h5 className="card-title">{method.name}</h5>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Cards;