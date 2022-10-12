import { useSelector, useDispatch } from "react-redux";
import { missionData } from "./redux/Missions/missions";
import Missions from "./components/Missions/Missions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("inside useEffect");
    dispatch(missionData());
  }, []);
  const stateData = useSelector((state) => state);
  console.log(stateData);

  return (
    <div>
     
      <Missions />
    </div>
  );
}

export default App;
