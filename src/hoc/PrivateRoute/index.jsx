/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const redirect = () => {
    localStorage.clear();
    return <Redirect to="/" />;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('access_token') &&
        new Date(localStorage.getItem('expires_in')) > new Date() ? (
          <Component {...props} />
        ) : (
          redirect()
        )
      }
    />
  );
}

export default PrivateRoute;
