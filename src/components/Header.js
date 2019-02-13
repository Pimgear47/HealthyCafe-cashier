import React,{Component} from "react";

// const Header = () => {
//     return <h1>Header</h1>;
// }

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()}; //object date of this state
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000); //1000millisec
        //setInterval is order it work (method,every time?)
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() { //for change data in state
        //this.state = {date : new Date()}; //not ok
        this.setState({date : new Date()});
    }

    render() { //if data has change it always render
        return (
            <div>{this.state.date.toLocaleTimeString()}</div> //.toLocaleTimeString is select from of Date()
        )
    } 
}

export default Header;