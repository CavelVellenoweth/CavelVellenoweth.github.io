import light_toggle from './light_toggle.js'

'use strict';

var header = React.createElement("div", {
    className: "header"
  }, React.createElement("a", {
    href: "https://cavelvellenoweth.github.io/",
    className: "logo"
  }, "Cavel Vellenoweth"),React.createElement(light_toggle,{defaultState:false,childState:false}), React.createElement("div", {
    className: "header-right"
  }, React.createElement("a", {
    href: "project1",
    className: "header-link"
  }, "project1"),
  ));

ReactDOM.render(header, document.getElementById('header'));
