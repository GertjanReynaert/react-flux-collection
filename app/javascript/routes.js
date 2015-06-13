import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';

import App from './components/main-component';
import Hangout from './components/timers/hangout';
import Standup from './components/timers/standup';
import Lunch from './components/timers/lunch';
import Planning from './components/timers/planning';
import Development from './components/timers/development';

export default (
  <Route handler={App}>
    <DefaultRoute handler={Hangout} />
    <Route path="hangout" handler={Hangout} />
    <Route path="standup" handler={Standup} />
    <Route path="lunch" handler={Lunch} />
    <Route path="planning" handler={Planning} />
    <Route path="development" handler={Development} />
  </Route>
);
