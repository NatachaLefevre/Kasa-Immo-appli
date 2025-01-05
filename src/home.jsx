import './scss/home.scss'
import logements from '/logements.json';
import BackgroundSection from './components/BackgroundSection';
import backgroundImageTitle from './assets/images/background-image-home.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">

      <BackgroundSection backgroundImage={backgroundImageTitle} overlayClass='title' title='Chez vous, partout et ailleurs' />


      <div className="gallery">
        {logements.map((property) => (
          <Link to={`/kasa/${property.id}`} className="card"
            style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${property.cover})` }}
            key={property.id}>
            <h3>{property.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;