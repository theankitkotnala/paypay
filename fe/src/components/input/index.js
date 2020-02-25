import React from 'react';
import './style.scss';

const Input = props => {
    const [value , setValue] = React.useState('');
    return (
        <input 
            onChange={e => setValue(e.target.value)}
            value={value}
            placeholder={props.placeholder}
        />
    )
}

export default Input;