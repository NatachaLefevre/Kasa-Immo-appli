import { Link } from 'react-router-dom';

const Card = ({ property }) => {
  return (
    <Link to={`/kasa/${property.id}`} className="card"
      style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${property.cover})` }}>
      <h3>{property.title}</h3>
    </Link>
  );
};

export default Card;