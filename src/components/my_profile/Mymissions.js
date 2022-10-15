import React from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const Mymissions = () => {
  const { missions } = useSelector((state) => state.missions);

  return (
    <table className="reserve">
      <tr className="join-mission-div">
        <th>
          <h2 className="title"> My Missions</h2>
        </th>
      </tr>
      <tr className="reserve-section">
        {missions.map(
          (mission) => mission.joined && (
          <td className="reserve-items" key={uuid()}>
            {mission.mission_name}
          </td>
          ),
        )}
      </tr>
    </table>
  );
};

export default Mymissions;
