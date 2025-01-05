import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertyDetailsModal from './components/PropertyDetailsModal';

const KasaDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

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
                    navigate("/error"); // Redirection vers la page d'erreur
                }
                setLoading(false); // Arrête le chargement après la recherche
            })
            .catch(error => {
                console.error('Cette page ne correspond à aucun logement', error);
                setLoading(false); // Arrête le chargement en cas d'erreur
            });
    }, [id, navigate]);

    if (loading) {
        return <div>Chargement...</div>; // Affiche "Chargement..." tant que le fetch est en cours
    }

    return (
        <div>
            <PropertyDetailsModal property={logement} />
        </div>
    );
};

export default KasaDetail;