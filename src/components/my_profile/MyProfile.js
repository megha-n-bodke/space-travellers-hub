import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Mymissions from './Mymissions';
import './MyProfile.css';

const Profile = () => {
  const reserve = useSelector((state) => state.profile.reserved);
  return (
    <div className="container">
      <div className="reserve">
        <tr className="reserve-section">
          <th>
            <h2 className="title">My Reservations</h2>
          </th>
        </tr>
        <tr>
          {reserve.map((item) => (
            <td key={uuidv4()} className="reserve-items">
              <p>{item}</p>
            </td>
          ))}
        </tr>
      </div>
      <div className="reserve">
        <Mymissions />
      </div>
    </div>
  );
};
export default Profile;
