import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import methods from  '../../methods.json';
import './Cards.css'

function Cards() {
  const [modalProps, setModalProps] = useState({
    card: null
  });
  
  function showCard(card) {
    console.log('clicked guide', card);
    setModalProps({
      card
    });
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <h3>Popular Brew Methods</h3>
      </div>
      <div className='row d-flex justify-content-center'>
        {methods.map(method => 
        <div key={method.id} className="card-deck">
          <div className='card' onClick={() => showCard(method.name)}>
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