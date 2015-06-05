import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3" style={{height: "88%"}}>
        <div className="panel panel-default" style={{height: "100%"}}>
          <div className="panel-heading">
            Collections
            <button type="button" className="btn btn-default btn-xs pull-right">
              <i className="glyphicon glyphicon-plus"/>
            </button>
            <div className="clearfix"/>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item active">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="panel-body">
            <button type="button" className="btn btn-default">Default</button>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-danger">Danger</button>
          </div>
        </div>
      </div>
    );
  }
}
