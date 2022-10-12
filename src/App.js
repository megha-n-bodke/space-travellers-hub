import { useSelector, useDispatch } from "react-redux";
import { missionData } from "./redux/Missions/missions";
import Missions from "./components/Missions/Missions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missionData());
  }, []);

  return (
    <div>
      <Missions />
    </div>
  );
}

export default App;
