import React from 'react';
import './style.scss';

const Button = props => {
    return <button 
            className={props.class ? props.class : 'success'} 
            onClick={props.onButtonClick}>
        {props.text}
    </button>
}

export default Button;