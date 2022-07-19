import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addTracker, deleteTracker, updateTracker } from "./actions";

const trackers = createReducer([], {
  [addTracker]: (state, { payload }) => [payload, ...state],
  [deleteTracker]: (state, { payload }) => state.filter(item => item.id !== payload),
  [updateTracker]: (state, { payload }) => state.map(item => {
    if (item.id === payload.id) {
      item = { ...payload }
    }
    return item;
  })
})


export default combineReducers({ trackers });