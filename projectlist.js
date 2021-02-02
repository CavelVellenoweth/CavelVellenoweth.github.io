
import projects from "./project.js"

class ProjectList extends React.Component{
    constructor(props)
    {
        super(props);
        let limit = 0;
        switch(props.length)
        {
            case 'long':
                limit = 1;
                break;
            case 'medium':
                limit = 3;
                break;
            case 'short':
                limit = projects.length;
                break;
        }
        this.state = {length: props.length, 
            projectName: props.name, 
            limit: limit,
            language: props.language};
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
    checkLanguage(arr){            
        if(this.props.language == null)
            {
                return true;
            }
        for(const item of arr){
                if(item == this.props.language)
                {
                    return true;
                }
            
        };
        return false;
    }
    toTable(arr){
        const table = [];
        for(const item of arr){
            table.push(
                React.createElement("li",{
                key: item},
                React.createElement("a",{href:"./project-list.html?"+item,className:"languageLink"},item)
                )
            )
        };
        return table;
    }
    createList(){
        const _projects = [];
        let counter = 0;
        let link = "a";
        for(const project of projects){
            if(!this.checkLanguage(project.languages))
            {
                continue;
            }
            if(counter == this.state.limit)
            {
                break;
            }
            if(this.state.limit == 1){
                link = "div";
                if(project.name != this.state.projectName)
                {
                    continue;
                }
            }
            _projects.push( 
                React.createElement("div", {
                    className: "project",
                    key: project.name,
                },
                    React.createElement("div", {
                        className: "image-div"
                     },
                     React.createElement(link,
                            {href: "./project.html?"+project.name, className:"imageLink"},
                                React.createElement("img",{
                                src: project.image,
                                alt: project.title,
                                className: "image",  
                                })
                            )
                            ), 
                        
                    React.createElement("div", 
                        { className: "text-div"}, 
                        React.createElement(link,
                            {href: "./project.html?"+project.name, className:"projectLink"},
                            React.createElement("h2", {
                                className: "title"
                                },project.title), 
                            React.createElement("p",{
                                className: "description",  
                                }, this.renderDescription(project))
                        ),  
                        React.createElement("ul",{
                            className: "languages",  
                            }, this.toTable(project.languages))
                    )            
                )
            );
            counter++;
        }
    return (_projects);
    }   

    render()
    {
        return this.createList();
    }
}
export default ProjectList;