import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CardModal.css';

function CardModal(props) {
  console.log('props', props);

  const { card, show, onHide } = props;

  if(card) {
    const {
      name: name,
      image: image,
      description: description,
      instructions: instructions
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
          Recommended Brew Guide
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='body'>
        <h4 className='bodyHead'>{card.name}</h4>
        <h6 className='bodyDesc'>{card.description}</h6>
        {card.instructions.map(instruction => (
          <p key={instruction.id}>
            {instruction}
          </p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CardModal;