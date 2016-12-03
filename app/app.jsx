import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import './styles/app.scss';
import Main from './components/Main';
import Example from './components/Example';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Example} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
