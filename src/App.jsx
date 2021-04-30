import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';
import LoginPageContainer from './routes/Login';
import AdminPageContainer from './routes/AdminPage';

import s from './app.module.scss';

function App() {
  return (
    <Switch>
      <Route path="/404" render={() => <h1>404 Not Found</h1>} />
      <Route>
        <>
          <div className={cn(s.wrapper)}>
            <div className={s.container}>
              <Switch>
                <Route path="/" exact component={LoginPageContainer} />
                <Route path="/admin" exact component={AdminPageContainer} />

                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
          </div>
        </>
      </Route>
    </Switch>
  );
}

export default App;
