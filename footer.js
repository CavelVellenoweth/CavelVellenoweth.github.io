'use strict';

var footer = React.createElement("div", {
    className: "footer"
  }, React.createElement("a", {
    href: "https://github.com/CavelVellenoweth",
    className: "git"
  }, "github.com/CavelVellenoweth"), 
  React.createElement("a", {
    href: "mailto: cavelvellenoweth@gmail.com",
    className: "email"
  },"CavelVellenoweth@gmail.com"),
  React.createElement("a", {
    href: "CavelVellenoweth_CV.pdf",
    download: true,
    target: "_blank",
    className: "CV"
  },"My CV!")
  );

ReactDOM.render(footer, document.getElementById('footer'));
