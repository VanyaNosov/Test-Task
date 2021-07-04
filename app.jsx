import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/index.jsx';
import News from './components/news/index.jsx'
import Home from './components/home/index.jsx'
import Profilr from './components/profile/index.jsx'
import { Redirect } from 'react-router';
import style from './reset.css'

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route
            path='/profile'
            render={() => {
              if (localStorage.getItem('authorization') === 'true') {
                return <Redirect to="/profile" />, <Profilr />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          />
          <Route path='/news' component={News} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
