import React from 'react';
import routes from './routes';
import Router from 'react-router';

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});
