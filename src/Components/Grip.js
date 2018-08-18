import React, { Component } from 'react';

import grip from '../img/grip.png';

import '../LotteryContainer.css';

import Painel from './Painel';

class Grip extends React.Component{

    handleClick(event){
        event.preventDefault();
        <Painel/>
    }

    render(){
        return(
            <div>
                <img id="gripIMG" src={grip} alt="grip" onClick={this.handleClick.bind(this)}/>
            </div>
        );
    };
}

export default Grip;