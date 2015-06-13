import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Collections
          <button type="button" className="btn btn-default btn-xs pull-right">
            <i className="glyphicon glyphicon-plus"/>
          </button>
          <div className="clearfix"/>
        </div>
        <ul className="list-group">
          <li className="list-group-item">time + subject</li>
        </ul>
      </div>
    );
  }
}
