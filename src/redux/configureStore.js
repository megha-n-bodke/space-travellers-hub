import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile/profile';
import rocketsReducer from './rockets/rockets';

const root = combineReducers({
  rockets: rocketsReducer,
  profile: profileReducer,
});
const store = configureStore({ reducer: root });

export default store;
