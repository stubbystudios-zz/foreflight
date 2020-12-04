import React from 'react';
import './Runways.scss';

const Runways = ({ airport_data }) => (
  <section className='runways'>
    <ul className='runway-list'>

      {/* List available runways and useful information describing their condition. */}
      {airport_data.runways.map((item, i) => (
        <li key={i} className='card'>
          <header className='card-header'>
            <h4 className='card-title' data-test='component-title'>Runway {item.name}</h4>
          </header>
          <ul className='card-body'>
            <li data-test='component-label'><strong className='label'>Surface Type:</strong>{(item.surfaceType)}</li>
            <li data-test='component-label'>
              <strong className='label'>Lat / Long:</strong>
              {(item.latitudeBase).toFixed(3)}
              <span className='slash'>/</span>
              {(item.longitudeBase).toFixed(3)}
            </li>
            <li data-test='component-label'><strong className='label'>Dimensions:</strong>{item.length} x {item.width} ft.</li>
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default Runways;