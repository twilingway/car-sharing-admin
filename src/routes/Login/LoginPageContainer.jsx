import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginPage from './LoginPage';

function LoginPageContainer() {
  const history = useHistory();

  return <LoginPage onClickButton={() => history.push('/admin/card')} />;
}

export default LoginPageContainer;
