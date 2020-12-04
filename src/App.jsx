import React from 'react';
import useAxios from 'axios-hooks';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Runways from './components/Runways/Runways';
import Weather from './components/Weather/Weather';

const App = () => {
  /**
   * Data for Header and Runways components
   */
  const [{ data, loading, error }] = useAxios(
    'http://localhost:3000/airports/khou.json'
  );

  if (loading) return <p className='loading'>Loading runway information...</p>
  if (error) return <p className='error'>Error!</p>

  const airport_data = data;

  return (
    <div className='app-wrapper'>
      <Header />
      <Description airport_data={airport_data} />
      <div className='main' role='main'>
        <div className='container'>
          <Weather />
          <Runways airport_data={airport_data} />
        </div>
      </div>
    </div>
  );
}

export default App;
