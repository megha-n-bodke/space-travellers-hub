import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { missionsReducer } from "./Missions/missions";

const rootReducer = combineReducers({ missionsReducer });
const store = configureStore(rootReducer);

export default store;
