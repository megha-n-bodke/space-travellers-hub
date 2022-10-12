import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { missionsReducer } from "./Missions/missions";

const rootReducer = combineReducers({ missions: missionsReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
