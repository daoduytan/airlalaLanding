import React, { Component } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
    margin: 0 0 20px;

    > label {
        display: block;
        margin-bottom: 10px;
        font-size: 11px;
        color #333;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    input {
        display: block;
        width: 100%;
        padding: 10px 15px;
        border: 1px solid #ddd;
        border-radius: 3px;
        outline: none;
        color: #333;
        font-size: 14px;

        &:focus, &:active {
            border-color: #04ce84;
        }
    }
`

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    onChange = (e) => {
        this.setState({value : e.target.value});
        this.props.onChange(e.target.value, this.props.name)
    }
    render() {
        return (
            <FormGroup>
                <label>{this.props.label}</label>
                <input 
                    value={this.state.value}
                    onChange={this.onChange}
                    type={this.props.type} 
                    name={this.props.name}
                    placeholder={this.props.placeholder} 
                />
            </FormGroup>
        );
    }
}

export default TextField;