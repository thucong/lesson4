import React,{ Component } from "react";
import WarningBanner from "./components/WarningBanner";

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            showWarning: true,
        }
    }
    handleToggeClick = () => {
        this.setState({
            showWarning : !this.state.showWarning
        })
    }
    render() {
        const showWarning = this.state.showWarning;
        let button;
        if(showWarning){
            button = <button onClick={this.handleToggeClick}>Hide</button>
        }else{
            button = <button onClick={this.handleToggeClick}>Show</button>
        }
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                {button}
            </div>
        )
    }
}
export default Page;