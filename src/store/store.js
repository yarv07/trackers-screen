import { configureStore } from '@reduxjs/toolkit';
import trackersReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'trackers',
  storage,
}
const persistedReducer = persistReducer(persistConfig, trackersReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store)

export { store, persistor };