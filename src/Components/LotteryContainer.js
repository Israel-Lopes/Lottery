import React, { Component } from 'react';

import Logo from './Logo';
import Machine from './Machine';
import Grip from './Grip';

import '../LotteryContainer.css';

class LotteryContainer extends React.Component{
    render(){
        return (
            <div id="LotteryContainer">
                <div>
                    <h1 id="logo">
                        <Logo/>
                    </h1>
                </div>
                <div>
                    <div id="machine">
                        <Machine/>
                        <Grip/>
                    </div>
                </div>
                <div>
                    <h6>Rodape</h6>
                </div>
            </div>
        );
    }
}

export default LotteryContainer;