// Pour gérer l'affichage dynamique des logements dans la page d'accueil
import React from 'react';
import './scss/home.scss'

const PropertyDetailsModal = ({ property, onClose }) => {
  return (
    <div className="modal">
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      {/* Ajouter d'autres détails si nécessaire */}
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default PropertyDetailsModal;