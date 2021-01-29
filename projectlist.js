import projects from "./project.js"

class ProjectList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {length: props.length};
    }
    renderDescription(project)
    {
        switch(this.state.length)
        {
            case 'short':
                return(project.shortDesc);
            case 'medium':
                return(project.medDesc);
            case 'long':
                return(project.longDesc);
        }
    }
    render(){
        const _projects = [];
        projects.forEach(project => {
            _projects.push( 
                React.createElement("div", {
                    className: "project",
                    key: project.title,
                },
                    React.createElement("h2", {
                        href: project.title,
                        className: "title"
                    },project.title), 
                    React.createElement("img",{
                        src: project.image,
                        alt: project.title,
                        className: "image",  
                    }),
                    React.createElement("p",{
                        className: "description",  
                        }, this.renderDescription(project))
                )
            );
        });
    return (_projects);
    }

    
}

// const projects = [
//     {
//         image: 'imageLink',
//         title: 'Project 1',
//         shortDesc: 'short p1',
//         medDesc: 'medium proj 1',
//         longDesc: 'long project 1',
//     },
//     {
//         image: 'imageLink',
//         title: 'Project 2',
//         shortDesc: 'short p2',
//         medDesc: 'medium proj 2',
//         longDesc: 'long project 2',
//     },
//     {
//         image: 'imageLink',
//         title: 'Project 3',
//         shortDesc: 'short p1',
//         medDesc: 'medium proj 3',
//         longDesc: 'long project 3',
//     }

// ];

// ReactDOM.render(React.createElement(ProjectList, {length: 'medium'}), document.getElementById('projects'));
// // ReactDOM.render(React.createElement(Project, {
// //     projs: projects
// //   }), document.getElementById('projects'));
export default ProjectList;