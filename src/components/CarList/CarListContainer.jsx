import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCarPage } from '../../store/reducers/carReducer';
import { selectCar } from '../../store/selectors/carSelectors';
import { fetchCar } from '../../store/thunks/carThunks';
import Loader from '../Loader';
import CarList from './CarList';

function CarListContainer() {
  const dispatch = useDispatch();
  const carReducer = useSelector(selectCar);

  const handlePageClick = (page) => {
    dispatch(setCarPage(page));
  };

  useEffect(() => {
    dispatch(fetchCar({ page: carReducer.page, limit: carReducer.limit }));
  }, [dispatch, carReducer.page, carReducer.limit]);

  useEffect(() => {
    dispatch(fetchCar({ page: carReducer.page, limit: carReducer.limit }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (carReducer.isFetch) {
    return <Loader />;
  }

  return <CarList carList={carReducer} onPageClick={handlePageClick} />;
}

export default CarListContainer;
