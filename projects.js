import ProjectList from './projectlist.js';
var search = window.location.href.split('?')[1];
if(document.getElementById('projects-short') != null)
{
    ReactDOM.render(React.createElement(ProjectList, {length: 'short', language: search}), document.getElementById('projects-short'));
}
else if(document.getElementById('projects-medium') != null)
{
    ReactDOM.render(React.createElement(ProjectList, {length: 'medium'}), document.getElementById('projects-medium'));
}
else if(document.getElementById('projects-long') != null)
{
    ReactDOM.render(React.createElement(ProjectList, {length: 'long', name: search}), document.getElementById('projects-long'));
}
else
    ReactDOM.render();