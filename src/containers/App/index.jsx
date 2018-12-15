import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../Homepage';
import AuthPage from '../Auhtpage';
import NotFound from '../NoteFound';

const App = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/auth" component={AuthPage} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
