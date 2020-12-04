import React from 'react';
import './Weather.scss';
import useAxios from 'axios-hooks';

const Weather = () => {
  const [{ data, loading, error }] = useAxios(
    'http://localhost:3000/weather/khou.json'
  );

  if (loading) return <p className='loading'>Loading weather information..</p>
  if (error) return <p className='error'>Error!</p>

  const conditions = data.report.conditions;

  const bearing = conditions.wind.direction;
  const bearingArr = [
    'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'
  ];

  const ISODateTime = new Date(conditions.dateIssued);
  const dateStamp = ISODateTime.toLocaleDateString();
  const timeStamp = ISODateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Divide compass rose into cardinal, intercardinal and 
  // secondary-intercardinal directions.
  // (360 / 16 = 22.5) 
  const direction = bearingArr.map((item, index) => {
    let degreeMin = index * 22.5;
    let degreeMax = degreeMin + 22.5;

    // Assign a direction (N, E, S, W, etc.) to each range of 16 directions.
    if (bearing > degreeMin && bearing < degreeMax) {
      return (
        // Display the bearing and its relative direction.
        <span key={index}>{bearing} {item}</span>
      )
    }
  });

  return (
    <section className='weather'>
      <section className='card'>
        <header className='card-header'>
          <h4 className='card-title'>Weather Conditions</h4>
          <p className='card-subtitle time-stamp'>as of {timeStamp}, {dateStamp}</p>
        </header>
        <div className='card-body'>
          <ul>
            <li>
              {/* Temp (F) */}
              <strong className='label'>Temperature:</strong>
              <span data-test='component-temperature'>{(conditions.tempC * 9 / 5) + 32}&#8457;</span>
            </li>
            <li>
              {/* Relative humidity (%) */}
              <strong className='label'>Relative Humidity:</strong>
              <span data-test='component-humidity'>{conditions.relativeHumidity}&#37;</span>
            </li>
            <li>
              {/* Summary of cloud coverage (text string) */}
              <strong className='label'>Cloud Coverage</strong>
              <span data-test='component-clouds'>{conditions.cloudLayers.map(item => item.coverage.toUpperCase())}</span>
            </li>
            <li>
              {/* Visibility (Statute Miles) */}
              <strong className='label'>Visibility:</strong>
              <span data-test='component-visibility'>{conditions.visibility.distanceSm} miles</span>
            </li>
            <li>
              {/* Wind Speed (MPH) */}
              <strong className='label'>Wind Speed:</strong>
              <span data-test='component-wind-speed'>{(conditions.wind.speedKts * 1.151).toFixed(1)} mph</span>
            </li>
            <li>
              {/* Wind Direction (cardinal directions to secondary-intercardinal precision) */}
              <strong className='label'>Wind Direction:</strong>
              <span data-test='component-wind-direction'>{direction}</span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Weather;