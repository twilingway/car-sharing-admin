import React from 'react';
import { useHistory } from 'react-router-dom';
import Error500 from './Error500';

function Error500Container() {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };
  return <Error500 onClickBackButton={handleBackClick} />;
}

export default Error500Container;
