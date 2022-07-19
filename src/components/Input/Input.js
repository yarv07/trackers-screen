import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTracker } from '../../store/actions';
import styles from './Input.module.css'


const TrackerNameInput = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const changeHandler = useCallback((event) => {
    setName(event.target.value)
  }, []);

  const addTrackerHandler = useCallback((event) => {
    event.preventDefault();
    dispatch(addTracker(name));
    
    setName('')
  }, [dispatch, name]);

  return (
    <form className={styles.form} onSubmit={addTrackerHandler}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Enter tracker name" 
        name='name' 
        value={name}
        onChange={changeHandler}>
      </input>
      
      <button className={styles.button} type="submit">►</button>
    </form>
  )
};

export default TrackerNameInput;