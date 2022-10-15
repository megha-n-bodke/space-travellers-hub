import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/Rockets';
import Rocket from '../rockets/Rocket';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets);
  console.log(rocketList);
  useEffect(() => {
    dispatch(getRockets());
  },
  []);

  return (
    <div>
      <ul>
        {rocketList.map((rocket) => (
          <li key={rocket.id}>
            <Rocket
              id={rocket.id}
              image={rocket.flickr_images[0]}
              name={rocket.rocket_name}
              description={rocket.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
