"use strict;"

class light_toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {lightMode: false, background: "./Project_images/dark.png"}
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        if(this.state.lightMode)
        {
            this.setState({lightMode: false});
            this.setState({background: "./Project_images/dark.png"});
            document.getElementById("header").style.cssText="background-color: #000122";
            document.getElementById("footer").style.cssText="background-color: #000122";
            document.getElementById("content").style.cssText = "color: white; background-color: #020430;";
            document.getElementsByTagName("body")[0].style.cssText="background-image: url(./Project_images/background.png);";
        }
        else
        {
            this.setState({lightMode: true});
            document.getElementById("header").style.cssText="background-color: #FF6A00";
            document.getElementById("footer").style.cssText="background-color: #FF6A00";
            this.setState({background: "./Project_images/light.png"});
            document.getElementById("content").style.cssText = "color: black; background-color: white; text-shadow: none; background-image:url(./Project_images/bodyBackgroundLight.png);";
            document.getElementsByTagName("body")[0].style.cssText="background-image: url(./Project_images/backgroundLight.png);";
        }
    }
    render(){
            return(React.createElement("div",{className:"lightToggle"},
                React.createElement("img",{ 
                    className: this.state.lightMode.toString(),
                    onClick: this.toggle,
                    src: this.state.background
                })
            ));
            
    }
}
export default light_toggle;