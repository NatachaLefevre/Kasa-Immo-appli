import React, { useState } from 'react';
import './scss/home.scss'
import logements from './logements.json';
import backgroundImageTitle from './assets/images/background-image-home.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property); // Mettre à jour le logement sélectionné
  };


  return (
    <div className="home">

      <div className='title' style={{ backgroundImage: `url(${backgroundImageTitle})` }}>
      <div className='overlayTitle'></div>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      

      <div className="gallery">
        {logements.map((property) => (
          <Link to={`/kasa/${property.id}`} className="card"
          style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${property.cover})` }}
          key={property.id} onClick={() => handlePropertyClick(property)}>
            {/* <img src={property.cover} alt={property.name} />  */}
            <h3>{property.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;