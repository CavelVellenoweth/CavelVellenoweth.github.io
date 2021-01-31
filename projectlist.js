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
    toTable(arr){
        const table = [];
        arr.forEach(item => {
            table.push(
                React.createElement("li",{
                key: item},
                item)
            )
        });
        return table;
    }
    render(){
        const _projects = [];
        projects.forEach(project => {
            _projects.push( 
                React.createElement("div", {
                    className: "project",
                    key: project.title,
                },
                    React.createElement("div", {
                        className: "image-div"
                     },
                        React.createElement("img",{
                            src: project.image,
                            alt: project.title,
                            className: "image",  
                        }),
                    ),
                    React.createElement("div", 
                        { className: "text-div"}, 
                        React.createElement("h2", {
                            href: project.title,
                            className: "title"
                            },project.title), 
                        
                        React.createElement("p",{
                            className: "description",  
                            }, this.renderDescription(project)),
                        React.createElement("ul",{
                            className: "languages",  
                            }, this.toTable(project.languages)))
                        
                    
                )
            );
        });
    return (_projects);
    }   
}
export default ProjectList;