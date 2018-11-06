import React, { Component } from 'react';
import './style.scss';
export default class Positioning extends Component {
    constructor() {
        super();
        this.state = {
            positions: [{title: 'top left'}, {title: 'top right'}, {title: 'bottom left'}, {title: 'bottom right'}]
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(selected) {
        this.setState(state => ({
            selected: state.positions.map(x => x.title === selected ? x.selected = true : x.selected = false)
        }));
        this.props.onClick(selected);
    }
    render() {
        return (
            <div>
                <h3>Choose position:</h3>
                <div className='positioning'>
                {
                    this.state.positions.map(x => (
                        x.selected 
                        ? <span style={{background: 'orange'}} onClick={() => this.onClick(x.title)}>{x.title}</span>
                        : <span onClick={() => this.onClick(x.title)}>{x.title}</span>
                    ))
                }
                    {/* <span onClick={props.onClick}>left top</span>
                    <span onClick={props.onClick}>right top</span>
                    <span onClick={props.onClick}>left bottom</span>
                    <span onClick={props.onClick}>right bottom</span> */}
                </div>
            </div>
        )
    }
}