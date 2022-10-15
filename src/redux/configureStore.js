import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';

const root = combineReducers({
  rockets: rocketsReducer,
});
const store = configureStore({ reducer: root });

export default store;
