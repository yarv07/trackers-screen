import React from 'react';
import { useSelector } from 'react-redux'
import Tracker from '../Tracker';
import styles from './TrackersList.module.css';

const TrackersList = () => {
  const trackers = useSelector(state => state.trackers)

  return (
    <ul className={styles.trackersList}>
      {trackers.map(item => 
        (<li key={item.id}>
          <Tracker item={item} />
        </li>))}
    </ul>
  )
}

export default TrackersList