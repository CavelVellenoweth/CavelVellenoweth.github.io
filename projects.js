'use strict';

function Project(props){
    const _projects = [];
    props.projs.forEach(project => {
        _projects.push( 
            React.createElement("div", {
            className: "project",
            key: project.title,
        },
        React.createElement("h2", {
            href: project.title,
            className: "title"
          },project.title), React.createElement("p",{
            className: "description",  
          }, project.medDesc), React.createElement("img",{
              src: project.image,
              alt: project.title,
            className: "image",  
          })));
    });
    return (_projects);
}
const projects = [
    {
        image: 'imageLink',
        title: 'Project 1',
        shortDesc: 'short p1',
        medDesc: 'medium proj 1',
        longDesc: 'long project 1',
    },
    {
        image: 'imageLink',
        title: 'Project 2',
        shortDesc: 'short p2',
        medDesc: 'medium proj 2',
        longDesc: 'long project 2',
    },
    {
        image: 'imageLink',
        title: 'Project 3',
        shortDesc: 'short p1',
        medDesc: 'medium proj 3',
        longDesc: 'long project 3',
    }

];

ReactDOM.render(React.createElement(Project, {
    projs: projects
  }), document.getElementById('projects'));