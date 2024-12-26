import React, { useState } from 'react';
import './scss/collapse.scss'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-title" onClick={toggleCollapse}>
        {title} 
        <span className="arrow">{isOpen ? "▲" : "▼"}</span> {/* Flèche à droite */}
      </button>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;