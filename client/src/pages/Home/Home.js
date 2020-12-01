import React from 'react';
import './style.css';

function Home() {
  return (
    <div className='container text-center center'>
      <h1 className='fade-in'>Hello,</h1>
      <br></br>
      <h1 className='fade-in second-text'>Welcome to BrewNotes! ☕</h1>
      <br></br>
      <h2 className='fade-in third-text'>This website is a resource for coffee brewing methods and a place where coffee enthusiasts can log information about their brews.</h2>
    </div>
  )
}

export default Home;