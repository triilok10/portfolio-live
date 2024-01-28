import React, { useState, useEffect } from 'react';
import css from './Location.module.scss'
const GeolocationApp = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);
  return (
    <div>
      <a className="anchor" id="locate"></a>
      <div className={`flexCenter  ${css.wrapper}`}>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <div className='secondaryText yPaddings'>
         <h2 className='flexCenter'>  Your current location is: </h2> 
         <h3 className='flexCenter'> Latitude: {latitude}</h3>
           <h3 className='flexCenter'>Longitude: {longitude}</h3> 
          </div>
        )}</div>
    </div>
  );
};

export default GeolocationApp;
