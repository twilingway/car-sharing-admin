import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectPoint } from '../../../store/selectors/pointSelectors';
import fetchCity from '../../../store/thunks/pointThunks';
import City from './City';

function CityContainer() {
  const dispatch = useDispatch();
  const pointReducer = useSelector(selectPoint);

  useEffect(() => {
    dispatch(fetchCity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <City city={pointReducer.city} />;
}

export default CityContainer;
