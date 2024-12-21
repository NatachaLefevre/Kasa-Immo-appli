import React from 'react';
import './scss/error.scss'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className='error'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className='retourAccueil'>Retourner sur la page d’accueil</Link>
      </div>
    </>
  )
};

export default Error;