import React, { Component } from 'react';

class Calculator extends Component {

    render() {
        return (
            <div>
                <h1>340.0</h1>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right text-success title">
                        บิงซู x 1 = 200.0
                        <button className="btn btn-light btn-small title">X</button>
                    </li>
                    <li className="text-right text-success title">
                        เฟรนฟายส์ x 1 = 140.0
                        <button className="btn btn-light btn-small title">X</button>
                    </li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">ยืนยัน</button>
                <button className="btn btn-block btn-secondary title">ยกเลิก</button>
            </div>
        );
    }
}

export default Calculator;