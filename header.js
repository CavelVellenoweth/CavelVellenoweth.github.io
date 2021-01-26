'use strict';

var header = React.createElement("div", {
    className: "header"
  }, React.createElement("a", {
    href: "https://cavelvellenoweth.github.io/",
    className: "logo"
  }, " Cavel Vellenoweth "), React.createElement("div", {
    className: "header-right"
  }, React.createElement("a", {
    href: "#projects",
    className: "header-link"
  }, " projects ")));

ReactDOM.render(header, document.getElementById('header'));