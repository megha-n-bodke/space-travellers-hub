import React from 'react';
import './Rocket.css';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { name, image, description } = props;
  Rocket.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className="context">
      <img className="img" src={image} alt="user" />
      <div className="data">
        <h2 className="title">{name}</h2>
        <p className="dec">
          {description}
        </p>
        <button type="button" className="btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
