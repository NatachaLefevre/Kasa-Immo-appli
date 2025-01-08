import React, { useState, useRef, useEffect } from 'react';
import '../scss/collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleCollapse = () => {
      setIsOpen((prev) => {
          return !prev;
      });
      setMaxHeight((prev) => (prev === '0px' ? `${contentRef.current.scrollHeight}px` : '0px'));
  };

  useEffect(() => {
      // console.log("État actuel de isOpen : ", isOpen);
  }, [isOpen]);

  return (
      <div className="collapse">
          <button className="collapse-title" onClick={toggleCollapse}>
              {title}
              <span className={`arrow ${isOpen ? 'rotate' : ''}`}>
                  <FontAwesomeIcon icon={faChevronDown} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                  {/* L'animation de rotation est gérée ici, pas besoin de modifier le scss */}
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
                      transform: isOpen ? 'translateY(0)' : 'translateY(-50px)',
                      transition: 'transform 0.4s ease',
                  }}
              >
                  {children}
              </div>
          </div>
      </div>
  );
};

export default Collapse;