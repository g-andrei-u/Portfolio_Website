import React from 'react';
import '../../Style/General.css';
import './Mode.css';

interface Props {
    mode: boolean, 
    setMode: () => void
}


const Mode: React.FC<Props> = (props:Props) => {
    return (
        <div className={props.mode ? "mode buttons black" : "mode buttons white"}>
            <a onClick={() => props.setMode()} style={{fontSize: '16px'}} >Change Mode</a>
        </div>
    )
};


export default Mode;