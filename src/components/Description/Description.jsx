import React from 'react';
import './Description.scss';

const Description = ({ airport_data }) => (
  <section className='page-description'>
    <div className='container'>
      <header>
        <h1>{airport_data.name}</h1>
        <h2>{airport_data.city}</h2>
      </header>
      <ul className='subheader'>
        <li><strong className='label'>ICAO:</strong>{airport_data.icao}</li>
        <li>
          <strong className='label'>Lat / Long:</strong>
          {(airport_data.latitude).toFixed(7)}
          <span className='slash'>/</span>
          {(airport_data.longitude).toFixed(7)}
        </li>
      </ul>
    </div>
  </section >
);

export default Description;