import React, { Component } from 'react';

import logo from '../img/LOGO_negative.png';
import machine from '../img/machine.png';
import grip from '../img/grip.png';

import '../LotteryContainer.css';

class LotteryContainer extends React.Component{
    render(){
        return (
            <div id="LotteryContainer">
                <div>
                    <h1 id="logo">
                        <img id="logoIMG" src={logo} alt="logo"/>
                    </h1>
                </div>
                <div>
                    <div id="machine">
                        <img id="machineIMG" src={machine} alt="machine"/>
                        <img id="gripIMG" src={grip} alt="grip"/>
                    </div>
                </div>
                <div>
                    <h1>Sodape</h1>
                </div>
            </div>
        );
    }
}

export default LotteryContainer;