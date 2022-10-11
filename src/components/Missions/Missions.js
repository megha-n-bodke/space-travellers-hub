import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { missionData } from "../../redux/Missions/missions";

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    useDispatch(missionData());
  }, []);
  const stateData = useSelector((state) => state);
  console.log(stateData);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
