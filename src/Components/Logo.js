import React, { Component } from 'react';

import logo from '../img/LOGO_negative.png';

import '../LotteryContainer.css';

class Logo extends React.Component{
    render(){
        return(
            <div>
                <img id="logoIMG" src={logo} alt="logo"/>
            </div>
        );
    };
}

export default Logo;