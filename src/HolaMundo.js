import React,{ Component } from 'react';
var ReactDom = require('react-dom');

class HolaMundo extends Component{
    //Necesario para la forma 2 forma state
    constructor(props){
        super(props);
        this.state = {
            msg: "Mundo"
        };
        this.updateMsg = this.updateMsg.bind(this);
    }
    updateMsg(){
        this.setState({
            msg: "Not Mundo"
        });
    }

    //Forma 1 de Renderizar
    // render(){
    //     return(
    //         <h1>Hola {this.props.name}</h1>
    //     );
    // }
    //forma 2 de renderizar
    render(){
        return(
            <div>
                <h1>Hello {this.state.msg}</h1>
                <button onClick ={this.updateMsg}>Aprietame</button>
            </div>
        )
    }
}

HolaMundo.default = {
    name: "Chalo"
};

ReactDom.render(<HolaMundo name = "Mundo" /> , document.getElementById('root'));


