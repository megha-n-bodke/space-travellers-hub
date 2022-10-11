import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//actions
const SHOW_MISSIONS = "SHOW_MISSIONS";
const JOIN_MISSION = "JOIN_MISSION";
const LEAVE_MISSION = "LEAVE_MISSION";

const baseAPI = "https://api.spacexdata.com/v3/missions";

//thunk
const missionData = createAsyncThunk(
  SHOW_MISSIONS,
  async (args, { dispatch }) => {
    const { data } = await axios.get(baseAPI);

    dispatch({
      type: SHOW_MISSIONS,
      payload: data,
    });
  }
);

//reducer
const missions = [];
export const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case SHOW_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };

    default:
      return state;
  }
};
