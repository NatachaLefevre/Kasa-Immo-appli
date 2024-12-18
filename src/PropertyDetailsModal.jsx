// Pour gérer l'affichage dynamique des logements dans la page d'accueil
import React from 'react';

const PropertyDetailsModal = ({ property, onClose }) => {
  return (
    <div className="modal">
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      {/* Ajoutez d'autres détails si nécessaire */}
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default PropertyDetailsModal;