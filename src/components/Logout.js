import { React, Component } from "react";

class Logout extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <h1>Welcome back !</h1>
                <button onClick={this.props.onClick}>Logout</button>
            </div>
        )  
    }
}
export default Logout