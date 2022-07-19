import React from 'react'
import Input from './components/Input';
import TrackersList from './components/TrackersList';
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>tracker</h1>
      <Input />
      <TrackersList />
    </div>
  )
};

export default App;