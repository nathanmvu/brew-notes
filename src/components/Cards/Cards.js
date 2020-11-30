import React, { useState } from 'react';
import methods from  '../../methods.json';
import './Cards.css';
import CardModal from '../CardModal/CardModal';

function Cards() {
  const [modalProps, setModalProps] = useState({
    card: null
  });

  const [modalShow, setModalShow] = React.useState(false);
  
  function showCard(card) {
    console.log('clicked guide', card);
    setModalShow(true)
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
          <div className='card' onClick={() => showCard(method)}>
            <img src={method.image} className="card-img-top" alt={method.name} />
            <div className="card-body">
              <h5 className="card-title">{method.name}</h5>
            </div>
          </div>
        </div>
        )}
      </div>
      <CardModal 
        {...modalProps}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Cards;