import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';
import carReducer from './reducers/carReducer';
import orderReducer from './reducers/orderReducer';

export default configureStore({
  reducer: {
    login: loginReducer,
    car: carReducer,
    order: orderReducer,
  },
});
