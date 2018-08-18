import React, { Component } from 'react';

import machine from '../img/machine.png';

import '../LotteryContainer.css';

class Machine extends React.Component{
    render(){
        return(
            <div>
                <img id="machineIMG" src={machine} alt="machine"/>
            </div>
        );
    };
}

export default Machine;