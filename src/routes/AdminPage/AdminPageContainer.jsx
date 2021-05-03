import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import CarCardContainer from '../../components/car-card';
import CarListContainer from '../../components/car-list';
import CarOrderContainer from '../../components/car-order';
import Error500Container from '../../components/Error500';
import AdminPage from './AdminPage';

function switchPage(params) {
  switch (params) {
    case 'card':
      return <CarCardContainer />;
    case 'list':
      return <CarListContainer />;
    case 'order':
      return <CarOrderContainer />;
    case 'error':
      return <Error500Container />;
    default:
      return useHistory().push('/404');
  }
}

function AdminPageContainer() {
  const match = useRouteMatch();
  return <AdminPage>{switchPage(match.params.id)}</AdminPage>;
}

export default AdminPageContainer;
