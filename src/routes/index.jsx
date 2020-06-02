import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InputPage from '../pages/input';
import DropZonePage from '../pages/dropzone';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={InputPage} />
      <Route path="/dropzone" component={DropZonePage} />
    </Switch>
  );
}

export default Routes;
