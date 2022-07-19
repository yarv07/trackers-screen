import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTracker, updateTracker } from '../../store/actions';
import { DateTime, Duration } from 'luxon'
import styles from './Tracker.module.css';

const Tracker = ({item: {id, name, time, isTimerActive, snapShot}}) => {
  const dispatch = useDispatch();
  
  const [tracker, setTracker] = useState(time);
  const [isActive, setIsActive] = useState(isTimerActive);
  const [snapShotTik, setSnapshotTik] = useState(snapShot);

  useEffect(() => {
    const now = +DateTime.now().toSeconds().toFixed(0);
    if (isActive) {
      console.log('now: ', now)
      console.log('snapShotTik: ', snapShotTik)
      console.log('time.seconds: ', time.seconds)
      console.log('now - snapShotTik: ', now - snapShotTik)
      console.log('summ: ', Math.ceil(now - snapShotTik + time.seconds))
      setTracker({seconds: now - snapShotTik + time.seconds})
    }
  }, [])
  
  useEffect(() => {
    let timerId;
    const now = +DateTime.now().toSeconds().toFixed(0);
    dispatch(updateTracker({id, name, time: tracker, isTimerActive: isActive, snapShot: now}))
    if (isActive) {
      timerId = setInterval(() => {
        setTracker(prev => { 
          return { seconds: prev.seconds + 1 } 
        });

        setSnapshotTik(+DateTime.now().toSeconds().toFixed(0));
      }, 1000)
    };
    return () => clearInterval(timerId)
  }, [id, name, tracker, isActive, snapShotTik, dispatch]);

  const isActivehandler = () => {
    setIsActive(prev => !prev);
  };
  
  return (
    <div className={isActive ? styles.tracker + " " + styles.active : styles.tracker}>
      <p className={styles.trackerName}>{name}</p>

      <p className={styles.trackerTime}>{Duration.fromObject(tracker).toISOTime({ suppressMilliseconds: true })}</p>

      <div className={styles.buttonsContainer}>
        <button 
          className={isActive ? styles.button + " " + styles.pause : styles.button + " " + styles.play} 
          type='button' 
          onClick={() => isActivehandler()}>
        </button>

        <button 
          className={styles.delete + " " + styles.button} 
          type='button' 
          title='delete' 
          onClick={() => dispatch(deleteTracker(id))}>
        </button>
      </div>
    </div >
  )
};

export default Tracker;