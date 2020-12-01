import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CardModal.css';

function CardModal(props) {
  console.log('props', props);

  const { card, isOpen, show, onHide } = props;

  if(card) {
    const {
      name: name,
      image: image,
      description: description,
      instructions: instructions,
      source: source,
      sourceLink: sourceLink
    } = card;
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Recommended Brewing Recipe
        </Modal.Title>
      </Modal.Header>
      {isOpen ?
      <Modal.Body className='body'>
        <h4 className='bodyHead'>{card?.name}</h4>
        <h6 className='bodyDesc'>({card?.description})</h6>
        <hr></hr>
        <p className='instructionHead'>Instructions:</p>
        {card.instructions.map(instruction => (
          <p key={instruction.id}>
            {instruction}
          </p>
        ))}
        <br></br>
        <p>
          <small class="font-italic text-muted">
            <a href={card?.sourceLink} target='_blank'>
              Source: {card?.source}
            </a>
          </small>
        </p>
      </Modal.Body>
      : null}
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CardModal;