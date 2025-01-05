// Pour gérer l'affichage dynamique des logements dans la page d'accueil

import React, { useState } from 'react';
// Conserver UseState pour le cas où on aurait besoin d'ajouter des fonctionnalités dynamiques à l'avenir

import '../scss/home.scss';
import Slideshow from '../components/slideshow.jsx';
import Collapse from '../components/collapse.jsx';
import '../scss/page-logement/PropertyDetailsModal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const PropertyDetailsModal = ({ property }) => {
  return (
    <div className="modal">

      {/* Carrousel d'images */}
      <Slideshow images={property.pictures} />

      <div className='info-property'>

        <div className='info-left'>

          {/* Titre de la propriété */}
          <h1>{property.title}</h1>

          {/* Section pour la Localisation */}
          <div className='lieu'><p>{property.location}</p></div>

          {/* Section pour les Tags */}
          <div className="tags">
            {property.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span> // Afficher chaque tag
            ))}
          </div>

        </div>

        <div className='info-right'>

          {/* Informations sur l'hôte */}
          <div className="host-info">
            <p>{property.host.name}</p>
            <img src={property.host.picture} alt={property.host.name} />
          </div>

          {/* Note de la propriété */}
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={`star ${index < property.rating ? 'filled' : ''}`}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
          </div>

        </div>

      </div>

      <div className='info-collapses'>

        {/* Section pour la Description */}
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>

        {/* Section pour les Équipements */}
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li> // Afficher chaque équipement dans une liste
            ))}
          </ul>
        </Collapse>
      </div>

    </div>
  );
};

export default PropertyDetailsModal;