import toggle from "./toggle.js";
"use strict;"

class light_toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {toggled: false}
        this.toggle_Light = this.toggle_Light.bind(this)
    }
    toggle_Light(){
        if(this.state.toggled)
        {
            this.setState({toggled: false});
            document.getElementById("header").style.cssText="background-color: #000122";
            document.getElementById("footer").style.cssText="background-color: #000122";
            document.getElementById("content").style.cssText = "color: white; background-color: #020430;";
            document.getElementsByTagName("body")[0].style.cssText="background-image: url(./Project_images/background.png);";
        }
        else
        {
            this.setState({toggled: true});
            document.getElementById("header").style.cssText="background-color: #FF6A00";
            document.getElementById("footer").style.cssText="background-color: #FF6A00";
            document.getElementById("content").style.cssText = "color: black; background-color: white; text-shadow: none; background-image:url(./Project_images/bodyBackgroundLight.png);";
            document.getElementsByTagName("body")[0].style.cssText="background-image: url(./Project_images/backgroundLight.png);";
        }
    }
    render(){
            return(React.createElement("div",{className:"lightToggle"},
                React.createElement(toggle,{ 
                    image1:"./Project_images/dark.png",
                    image2:"./Project_images/light.png",
                    toggle2: this.toggle_Light,
                    className: "light-toggle",
                })
            ));
            
    }
}
export default light_toggle;