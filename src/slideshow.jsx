// Composant pour faire défiler les images des logements
import React, { useState } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slideshow">
            <button onClick={prevImage}>Précédent</button>
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            <button onClick={nextImage}>Suivant</button>
        </div>
    );
};

export default Slideshow;