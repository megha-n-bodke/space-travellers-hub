import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './MyProfile.css';

export default function Profile() {
  const reserve = useSelector((state) => state.profile.reserved);
  return (
    <div className="container" data-testid="container">
      <div className="reserve">
        <tr>
          <th><h2 className="title">My Reservations</h2></th>
        </tr>
        <tr>
          {reserve.map((item) => (
            <td key={uuidv4()}>
              <p>{item}</p>
            </td>
          ))}

        </tr>
      </div>
      <div className="reserve">
        <tr>
          <th><h2 className="title">My Reservations</h2></th>
        </tr>
        <tr>
          {reserve.map((item) => (
            <td key={uuidv4()}>
              <p>{item}</p>
            </td>
          ))}

        </tr>
      </div>
    </div>
  );
}
