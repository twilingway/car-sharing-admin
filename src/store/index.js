import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';
import carReducer from './reducers/carReducer';

export default configureStore({
  reducer: {
    login: loginReducer,
    car: carReducer,
  },
});
