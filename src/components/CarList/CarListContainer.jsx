import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCar } from '../../store/selectors/carSelectors';
import { fetchCar } from '../../store/thunks/carThunks';
import CarList from './CarList';

function CarListContainer() {
  const dispatch = useDispatch();
  const carReducer = useSelector(selectCar);
  // const selectedCategory = useSelector(selectOrderSelectedCategory);
  useEffect(() => {
    // if (selectedCategory.id) {
    //   dispatch(fetchCarById(selectedCategory.id));
    // } else {
    dispatch(fetchCar({ page: 1, limit: 10 }));
    // }
    // dispatch(fetchCategory());
    // dispatch(fetchRate());
    // dispatch(fetchRateType());
  }, []);

  return <CarList carList={carReducer.data} />;
}

export default CarListContainer;
