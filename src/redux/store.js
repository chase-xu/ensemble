import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';


export default configureStore({
  reducer: {
    reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
 