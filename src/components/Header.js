import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() }; //object date of this state
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000); //1000millisec
        //setInterval is order it work (method,every time?)
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { //for change data in state
        //this.state = {date : new Date()}; //not ok
        this.setState({ date: new Date() });
    }

    render() { //if data has change it always render
        //const style = { height: 70, marginTop: 50 };

        return ( //.toLocaleTimeString is select from of Date()
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success">
                            <img style={{ height: 70 }} src="/images/logo/logo.png" alt="" /> เฮลตี้ คาเฟ่
                        </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">
                            {this.state.date.toLocaleTimeString()}
                        </h5>
                        <ul className="list-inline">
                            <li className="list-inline-item title"><Link to="/" className="text-success">หน้าหลัก</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/orders" className="text-success">รายการสั่งซื้อ</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/products" className="text-success">สินค้า</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/about" className="text-success">เกี่ยวกับเรา</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;