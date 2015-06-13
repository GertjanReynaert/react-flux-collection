import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Timer</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to={`/standup`}>Standup</Link></li>
              <li><Link to={`/development`}>Development</Link></li>
              <li><Link to={`/planning`}>Planning</Link></li>
              <li><Link to={`/lunch`}>Lunch</Link></li>
              <li><Link to={`/hangout`}>Hangout</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <form className="navbar-form navbar-left">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Type <span className="caret"></span></button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </span>
                  <input type="text" className="form-control" placeholder="Timer subject"/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Start</button>
                  </span>
                </div>
              </form>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                  Gertjan Reynaert <span className="caret"/>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Account</a></li>
                  <li><a href="#">About us</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Sign out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
