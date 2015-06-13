import React, { Component } from 'react';
import Router from 'react-router';

import Navigation from './navigation';
import Sidebar from './sidebar';

let Yield = Router.RouteHandler;

export default class MainComponent extends Component {
  render() {
    return (
      <div id="app">
        <Navigation/>
        <div className="col-md-12">
          <div className="col-md-3">
            <Sidebar/>
          </div>
          <div className="col-md-9">
            <Yield />
          </div>
        </div>
      </div>
    );
  }
}
