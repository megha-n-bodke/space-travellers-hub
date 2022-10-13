import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'rockets/rockets/GET_ROCKETS';
const initialState = [];

// thunk
export const getRockets = createAsyncThunk(
  GET_ROCKETS,
  async (args, { dispatch }) => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();

    const rockets = Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    }));

    dispatch({ type: GET_ROCKETS, rockets });

    return rockets;
  },
);

// reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
    default:
      return state;
  }
};

export default rocketsReducer;
