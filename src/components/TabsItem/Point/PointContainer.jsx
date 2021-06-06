import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectPoint } from '../../../store/selectors/pointSelectors';
import { fetchPoint } from '../../../store/thunks/pointThunks';
import Point from './Point';

function PointContainer() {
  const dispatch = useDispatch();
  const pointReducer = useSelector(selectPoint);

  useEffect(() => {
    dispatch(fetchPoint());
  }, []);
  return <Point points={pointReducer.street} />;
}

export default PointContainer;
