import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import CarCardContainer from '../../components/car-card';
import CarListContainer from '../../components/CarList';
import CarOrderContainer from '../../components/CarOrder';
import Error500Container from '../../components/Error500';
import { fetchLogout } from '../../store/thunks/loginThunks';
import AdminPage from './AdminPage';

function AdminPageContainer() {
  const history = useHistory();

  const dispatch = useDispatch();

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
        return history.push('/404');
    }
  }

  const handleLogOut = async () => {
    localStorage.clear();
    await dispatch(fetchLogout());
    history.push('/');
  };

  const match = useRouteMatch();
  return (
    <AdminPage onLogout={handleLogOut}>{switchPage(match.params.id)}</AdminPage>
  );
}

export default AdminPageContainer;
