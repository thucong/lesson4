import { React, Component } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";

class Control extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : true,
        }
    }
    handleLoginClick = () => {
        this.setState({isLoggedIn: false});
    }
    handleLogoutClick = () => {
        this.setState({isLoggedIn: true});
    }
    render() {
        const isLoggedIn =  this.state.isLoggedIn;
        return(
            <div>
                { isLoggedIn ? 
                    <Login onClick={this.handleLoginClick}/>
                :
                    <Logout onClick={this.handleLogoutClick}/>
                }
            </div>

        )
    }
}
export default Control