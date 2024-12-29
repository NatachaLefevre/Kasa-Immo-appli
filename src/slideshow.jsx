// Composant pour faire défiler les images des logements

import React, { useState } from 'react';
import './scss/page-logement/slideshow.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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

            <button onClick={prevImage} className='button-slideshow'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />

            <button onClick={nextImage} className='button-slideshow'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="image-counter">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default Slideshow;