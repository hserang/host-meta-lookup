"use strict";

var React = require('react');

// needed for dev tools to work
window.React = React;

var App = require('./components/app.jsx');

React.render(<App />, document.getElementById('content-main'));
