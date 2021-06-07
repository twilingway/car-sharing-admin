import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';
import carReducer from './reducers/carReducer';
import orderReducer from './reducers/orderReducer';
import orderStatusReducer from './reducers/orderStatusReducer';
import pointReducer from './reducers/pointReducer';
import categoryReducer from './reducers/categoryReducer';

export default configureStore({
  reducer: {
    login: loginReducer,
    car: carReducer,
    order: orderReducer,
    orderStatus: orderStatusReducer,
    point: pointReducer,
    category: categoryReducer,
  },
});
