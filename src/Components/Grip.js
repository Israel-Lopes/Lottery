import React, { Component } from 'react';

import grip from '../img/grip.png';

class Grip extends React.Component{
    render(){
        return(
            <div>
                <img id="gripIMG" src={grip} alt="grip"/>
            </div>
        );
    };
}

export default Grip;