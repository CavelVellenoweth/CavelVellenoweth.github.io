import light_toggle from './light_toggle.js'

'use strict';
var light = document.cookie.split("=")[1]; //only using 1 cookie currently needs to be changed if more cookies are used for site.
var header = React.createElement("div", {
    className: "header"
  }, React.createElement("a", {
    href: "./",
    className: "logo"
  }, "Cavel Vellenoweth"),React.createElement(light_toggle,{defaultState:light,childState:light}), React.createElement("div", {
    className: "header-right"
  }, React.createElement("a", {
    href: "./project-list.html",
    className: "header-link"
  }, "project"),
  ));

ReactDOM.render(header, document.getElementById('header'));
