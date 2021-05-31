import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectLogin } from '../../store/selectors/loginSelectors';
import fetchLogin from '../../store/thunks/loginThunks';
import LoginPage from './LoginPage';

function LoginPageContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginReducer = useSelector(selectLogin);

  const handleSubmitLoginForm = async ({ username, password }) => {
    dispatch(fetchLogin({ username, password }));
  };

  useEffect(() => {
    if (loginReducer.data.access_token) {
      localStorage.setItem('access_token', loginReducer.data.access_token);
      history.push('/admin/card');
    }
  }, [history, loginReducer.data.access_token]);

  return <LoginPage onSubmit={handleSubmitLoginForm} />;
}

export default LoginPageContainer;
