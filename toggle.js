
"use strict;"

class toggle extends React.Component{
    constructor(props)
    {
        
        super(props);
        this.state = {toggled: props.defaultState, 
            background: props.image1, 
            image1: props.image1, 
            image2: props.image2,
            toggle2: props.toggle2}
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount(){
        this.setToggle();
    }
    setToggle(){
        if(this.state.toggled)
        {
            this.toggleOn();                     
        }
        else
        {
           this.toggleOff();  
        }
    }
    toggleOn(){  
        this.setState({background: this.props.image2});
    }
    toggleOff(){           
        this.setState({background: this.state.image1});
    }
    toggle(){
        this.props.toggle2();
        if(this.state.toggled)
        {
            this.setState({toggled: false});
            this.toggleOff();           
        }
        else
        {
            this.setState({toggled: true});
            this.toggleOn();
        }
    }
    render(){
            return(
                React.createElement("img",{ 
                    className: "toggle",
                    onClick: this.toggle,
                    src: this.state.background
                })
            );           
    }
}
export default toggle;