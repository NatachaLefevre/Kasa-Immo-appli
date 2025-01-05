import React, { useState, useRef, useEffect } from 'react';
import '../scss/collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`); // Récupérer la hauteur réelle du contenu
    } else {
      setMaxHeight('0px'); // Réduire à 0 quand fermé
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <button className="collapse-title" onClick={toggleCollapse}>
        {title}
        <span className="arrow">
          {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </span>
      </button>
      <div
        className="collapse-content"
        style={{
          maxHeight: maxHeight,
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
        }}
        ref={contentRef}
      >
        <div
          style={{
            transform: isOpen ? 'translateY(0)' : 'translateY(-50px)', // Déplacement du texte
            transition: 'transform 0.4s ease', // Transition uniquement pour le texte
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;