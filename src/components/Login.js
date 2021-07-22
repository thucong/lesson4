import { React, Component } from "react";

class Login extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <h1>Please sign up.</h1>
                <button onClick={this.props.onClick}>Login</button>
            </div>
            
        )
    }
}
export default Login