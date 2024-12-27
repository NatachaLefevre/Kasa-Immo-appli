import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetailsModal from './PropertyDetailsModal';

const KasaDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        fetch(`/logements.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const trouvé = data.find(item => item.id === id);
                setLogement(trouvé);
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, [id]);

    if (!logement) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <PropertyDetailsModal property={logement} />
        </div>
    );
};

export default KasaDetail;