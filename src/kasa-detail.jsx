import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertyDetailsModal from './components/PropertyDetailsModal';

const KasaDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/logements.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const trouve = data.find(item => item.id === id);
                if (trouve) {
                    setLogement(trouve);
                } else {
                    navigate("/error");
                }
            })
            .catch(error => {
                console.error('Cette page ne correspond à aucun logement', error);
            })
            .finally(() => {
                setLoading(false); // Arrête le chargement après la recherche, que ce soit en cas de succès ou d'erreur
            });
    }, [id, navigate]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <PropertyDetailsModal property={logement} />
        </div>
    );
};

export default KasaDetail;