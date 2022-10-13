import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { joinMission, leaveMission } from "../../redux/Missions/missions";
// import { missionData } from "../../redux/Missions/missions";

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  console.log(typeof missions);
  console.log(missions);

  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(joinMission(id));
  };

  const leaveHandle = (id) => {
    console.log("in leave");
    dispatch(leaveMission(id));
    console.log(missions.joined);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {missions?.map((singleMission) => (
            <tr key={missions.mission_id}>
              <td>{singleMission.mission_name}</td>
              <td>{singleMission.description}</td>

              {singleMission.joined ? (
                <>
                  <td>
                    <span class="badge bg-info text-dark">Active Member</span>
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-outline-danger"
                      onClick={() => leaveHandle(singleMission.mission_id)}
                    >
                      Leave Mission
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <span class="badge bg-secondary">Not A Member</span>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => clickHandler(singleMission.mission_id)}
                    >
                      Join Mission
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
