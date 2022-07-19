import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { DateTime } from "luxon";


const addTracker = createAction('tracker/add', data => {
  if (data.length === 0) {
    data = DateTime.now().toFormat('dd/LL/yyyy')
  }
  return {
    payload: {
      id: nanoid(10),
      name: data,
      time: { seconds: 0 },
      isTimerActive: true,
      snapShot: +DateTime.now().toSeconds().toFixed(0)
    },
  }
})

const deleteTracker = createAction('tracker/delete');
const updateTracker = createAction('tracker/update')


export { addTracker, deleteTracker, updateTracker }