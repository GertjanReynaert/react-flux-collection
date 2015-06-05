import React, { Component } from 'react';
import Navigation from './navigation';
import Sidebar from './sidebar';
import Detail from './detail';

export default class MainComponent extends Component {
  render() {
    return (
      <div id="app">
        <Navigation/>
        <Sidebar/>
        <Detail/>
      </div>
    );
  }
}
