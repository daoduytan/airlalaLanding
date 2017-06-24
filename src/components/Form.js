import React, { Component } from 'react';
import * as firebase from 'firebase';
import { firebaseApp } from '../firebase';
// import Validator from 'validator';
// import isEmpty from 'lodash/isEmpty';
import validateInput from './validatons';

import styled, { keyframes } from 'styled-components';
import TextField from './TextField';

const slideDown = keyframes`
	0% {
		transform: translateY(-100px);
        opacity: 0;

	}


    75% {
		transform: translateY(30px);
        opacity: .95;

	}

	100% {
		transform: translateY(0);
        opacity: 1;
	}
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    background: rgba(35, 67, 91, .7);
    overflow-y: auto;
    overflow-x: hidden;
`

const ModalDialog = styled.div`
    width: 90%;
    max-width: 480px;
    margin: 100px auto 0;
    background: #fff;
    border-radius: 3px;
    position: relative;
    z-index: 10;
    animation: ${slideDown} .5s cubic-bezier(0, 0, 0.4, 1.29);
`

const ModalContent = styled.div`
`
const ModalHeader = styled.div`
    padding: 30px 15px 15px;
    position: relative;
    border-radius: 3px 3px 0 0;

    h4 {
        margin: 0;
        font-size: 21px;
        font-weight: 600;
        color: #676767;
        letter-spacing: .5px;
        text-align: center;
    }

    .closeModal {
        display: block;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background: #FF9800;
        line-height: 33px;
        text-align: center;
        position: absolute;
        z-index: 999;
        top: -17.5px;
        color: #fff;
        right: -17.5px;
        cursor: pointer;   
    }
`
const ModalBody = styled.div`
    padding: 30px;

    button {

        display: block;
        padding: 10px 50px;
        border: none;
        background: #04ce84;
        color: #fff;
        margin: 30px auto 0;
        font-weight: 700;
        border-radius: 3px;
        letter-spacing: 1px;
        transition: all .15s ease-in-out;

        &:hover {
            box-shadow: 0px 10px 20px rgba(0,0,0,.2);
            transform: translateY(-5px)
        }
    }

    button[disabled] {
        background-color: #eaf0f6!important;
        border-color: #eaf0f6!important;
        box-shadow: none!important;
        color: #b0c1d4!important;
        cursor: not-allowed;
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0;
    bottom: 0; right: 0;
    z-index: 1;
   
`

const Success = styled.div`
    padding: 15px;
    text-align: center;

    h2 {
        font-size: 35px;
        font-weight: 400;
    }

    .icon {
        height: 100px;
        width: 100px;
        background: #04ce84;
        border-radius: 50%;
        margin: 0 auto 30px auto;
        position: relative;

        &:before, &:after {
            content: '';
            display: block;
            height: 5px;
            background: #fff;
            border-radius: 2px;
            position: absolute;
        }

        &:before {
            width: 47px;
            right: 18px;
            top: 50px;
            transform: rotate(-45deg);
        }

        &:after {
            width: 25px;
            left: 21px;
            top: 55px;
            transform: rotate(45deg);
        }
    }
`

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const Loadding = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.81);
    z-index: 10;
    
    &:before {
        content: "";
        position: absolute;
        border: 3px solid #eee;
        border-top: 3px solid #4CAF50;
        border-radius: 100%;
        top: 50%;
        left: 50%;
        margin-top: -25px;
        margin-left: -25px;
        height: 50px;
        width: 50px;
        animation: ${rotate360} .3s linear infinite;
    }

`

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            errors: {},
            isLoading: false,
            isSuccess: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { firstname, lastname, email, password, address, phone } = this.state,
            { errors, isValid } = validateInput(this.state),
            username = firstname + " " + lastname;

        if (isValid) {
            this.setState({
                isLoading: true
            })
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    firebase.database().ref('artisans/' + user.uid).update({ username, email, password, address, phone });

                    this.setState({
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        phone: '',
                        address: '',
                        errors: {},
                        isSuccess: true,
                        isLoading: false
                    })
                })
                .catch(err => {
                    this.setState({ errors: { email: err.message } })
                    console.log('error', err);
                })
        } else {
            this.setState({ errors });
            console.log('err');
        }
    }

    onClick = () => {
        this.props.closeModal();
    }



    render() {
        const renderForm = () => {
            const { isSuccess, errors, isLoading} = this.state;
            if (!isSuccess) {
                return (
                    <ModalContent>
                        {isLoading ? <Loadding /> : ''}
                        <ModalHeader>
                            <h4>Creare a Account</h4>
                            <span className="closeModal" onClick={this.onClick}>x</span>
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={this.onSubmit} autoComplete="off">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <TextField
                                            label="First Name"
                                            type="text"
                                            error={errors.firstname}
                                            placeholder="John"
                                            onChange={this.onChange} name="firstname"
                                            value={this.state.firstname} />
                                    </div>
                                    <div className="col-xs-6">
                                        <TextField
                                            label="Last Name"
                                            type="text"
                                            error={errors.lastname}
                                            placeholder="Doe"
                                            onChange={this.onChange} name="lastname"
                                            value={this.state.lastname} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <TextField
                                            label="Email"
                                            type="email"
                                            error={errors.email}
                                            placeholder="example@email.com"
                                            onChange={this.onChange} name="email"
                                            value={this.state.email} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <TextField
                                            label="Password"
                                            type="password"
                                            error={errors.password}
                                            placeholder="Type your password"
                                            onChange={this.onChange} name="password"
                                            value={this.state.password} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <TextField
                                            label="Address"
                                            type="text"
                                            error={errors.address}
                                            placeholder="Type your address"
                                            onChange={this.onChange} name="address"
                                            value={this.state.address} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <TextField
                                            label="Phone number"
                                            type="number"
                                            error={errors.phone}
                                            placeholder="Type your phone"
                                            onChange={this.onChange} name="phone"
                                            value={this.state.phone} />
                                    </div>
                                </div>

                                <button >Fisnish</button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                )
            }

            return (
                <ModalContent>
                    <ModalBody>
                    <Success>
                        <div className="icon">
                        </div>
                        <h2>Success!</h2>
                        <p>Creare a cccount success. Thank you very much!</p>
                        <button onClick={this.onClick}>Done</button>
                    </Success>
                    </ModalBody>
                </ModalContent>
            )
        }
        return (
            <Modal>
                <ModalDialog>
                    {renderForm()}   
                </ModalDialog>
                <Overlay onClick={this.onClick} />
            </Modal>
        );
    }
}

export default Form;