import React, { Component } from 'react';

import Logo from './Logo';
import Machine from './Machine';
import Grip from './Grip';
import Painel from './Painel';

import '../LotteryContainer.css';

import participantes from '../Json/participantes';

class LotteryContainer extends React.Component{
    render(){
        return (
            <div id="lotteryContainer">
                <div>
                    <h1 id="logo">
                        <Logo/>
                    </h1>
                </div>
                <div>
                    <div id="machine">
                        <Machine/>
                        <div id="grip">
                            <Grip id="grip"/>
                        </div>
                        <div id="painel">
                            <Painel/>
                        </div>
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