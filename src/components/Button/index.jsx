import React from 'react';
import './style.scss';
const Button = (props) => (
    <button className='btn' onClick={props.onClick}>{props.children}</button>
)
export default Button;