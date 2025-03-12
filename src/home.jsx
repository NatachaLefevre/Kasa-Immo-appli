import './scss/home.scss'
import logements from '..public/logements.json';
import BackgroundSection from './components/BackgroundSection';
import Card from './components/Card';
import backgroundImageTitle from './assets/images/background-image-home.jpg'

const Home = () => {

  return (
    <div className="home">

      <BackgroundSection backgroundImage={backgroundImageTitle} overlayClass='title' title='Chez vous, partout et ailleurs' />


      <div className="gallery">
        {logements.map((property) => (
          <Card property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;