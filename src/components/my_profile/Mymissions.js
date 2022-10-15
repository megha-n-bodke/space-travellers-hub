import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const Mymissions = () => {
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="join-mission-div">
      <tr>
        <th>
          <h2 className="title"> My Missions</h2>
        </th>
      </tr>
      <tr className="reserve-section">
        {missions.map(
          (mission) => mission.joined && <td className="reserve-items">Joined</td>,
        )}
      </tr>
    </div>
  );
};

export default Mymissions;
