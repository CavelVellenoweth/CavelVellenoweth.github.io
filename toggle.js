
"use strict;"

class toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {toggled: false, 
            background: props.image1, 
            image1: props.image1, 
            image2: props.image2,
            toggle2: props.toggle2}
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.props.toggle2();
        if(this.state.toggled)
        {
            this.setState({toggled: false});
            this.setState({background: this.state.image1});
        }
        else
        {
            this.setState({toggled: true});
            this.setState({background: this.state.image2});
        }
        this.state.function;
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