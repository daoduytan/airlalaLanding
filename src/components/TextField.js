import React from 'react';
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

    &.error {
        input {
            border-color: #e64646;
        }
    }
`

const Error = styled.div`
    font-size: 12px;
    background: #e64646;
    color: #fff;
    padding: 5px;
    transform: translateY(-2px);
    border-radius: 0 0 3px 3px;
`

const TextField = ({value, label, onChange, type, name, placeholder, error}) => {
    return (
        <FormGroup className={error && 'error'}>
            <label>{label}</label>
            <input 
                value={value}
                onChange={onChange}
                type={type} 
                name={name}
                placeholder={placeholder} 
            />
            {error && <Error>{error}</Error>}
        </FormGroup>
    )
}

export default TextField;