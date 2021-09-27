import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import LoadWindow from 'components/Home/LoadWindow';
import Home from 'components/Home';
import Practice from 'components/Practice';

const App: FC<{}> = () => (
  <BrowserRouter>
    <LoadWindow />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Practice" component={Practice} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
export default App;
