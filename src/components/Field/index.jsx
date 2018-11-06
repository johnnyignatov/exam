import React from 'react';
import './style.scss';

const Field = props => {
    let hidden = props.hidden;
    const presets = ['#eee', '#ttt']
    return (
        <div data-hidden={props.hidden} className={`field-item ${props.required ? 'field-required' : ''} ${props.className}`} >
            <label className="field-title" >{props.title}</label>
            {
                (!props.defaultValue && !props.value) && props.hidden ? false :
                    <input max={props.max} type={props.type} value={props.value} defaultValue={props.defaultValue} data-hidden={props.hidden} className="field-input" placeholder={!props.disabled ? props.placeholder : ''} onFocus={props.onClick} onBlur={props.onBlur} onChange={(e: any) => props.onChange !== undefined && props.onChange(e.target.value, e)} required={props.required} disabled={props.disabled} style={{ fontWeight: props.highlight ? 800 : 'normal' }} autoComplete='off' />
            }
        </div>
    )
};
export default Field;


