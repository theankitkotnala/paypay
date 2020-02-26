import React from 'react';
import './style.scss';

const Container = props => <div className={props.class}>{props.children}</div>;

export default Container;