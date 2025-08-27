/* eslint-disable react/prop-types */

const BackgroundSection = ({ backgroundImage, overlayClass, title }) => (
  <div style={{ backgroundImage: `url(${backgroundImage})` }} className={overlayClass}>
    <div className='overlay'></div>
    {title && <h2>{title}</h2>}
  </div>
);

export default BackgroundSection;