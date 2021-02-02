import light_toggle from './light_toggle.js'

'use strict';

var header = React.createElement("div", {
    className: "header"
  }, React.createElement("a", {
    href: "./",
    className: "logo"
  }, "Cavel Vellenoweth"),React.createElement(light_toggle,{defaultState:false,childState:false}), React.createElement("div", {
    className: "header-right"
  }, React.createElement("a", {
    href: "./project-list.html",
    className: "header-link"
  }, "project"),
  ));

ReactDOM.render(header, document.getElementById('header'));
