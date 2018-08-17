import React, { Component } from 'react';

import machine from '../img/machine.png';

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