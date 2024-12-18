import React, { useState } from 'react';
import PropertyDetailsModal from './PropertyDetailsModal'; // Modal pour afficher les détails du logement

const Home = () => {
  const propertiesData = [
    { id: '1', name: 'Logement 1', description: 'Description du logement 1.', image: 'url_image_1' },
    { id: '2', name: 'Logement 2', description: 'Description du logement 2.', image: 'url_image_2' },
    // Ajoutez d'autres logements ici
  ];

  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property); // Mettre à jour le logement sélectionné
  };

  const closeModal = () => {
    setSelectedProperty(null); // Fermer la modale
  };

  return (
    <div>
      <h2>Page d'Accueil</h2>

      <div className="gallery">
        {propertiesData.map((property) => (
          <div key={property.id} onClick={() => handlePropertyClick(property)}>
            <img src={property.image} alt={property.name} />
            <h3>{property.name}</h3>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <PropertyDetailsModal property={selectedProperty} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;