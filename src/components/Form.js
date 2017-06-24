import React, { Component } from 'react';
import * as firebase from 'firebase';
import {firebaseApp} from '../firebase';

import styled, {keyframes } from 'styled-components';
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

const Modal =  styled.div`
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

const ModalDialog =  styled.div`
    width: 90%;
    max-width: 480px;
    margin: 100px auto 0;
    background: #fff;
    border-radius: 3px;
    position: relative;
    z-index: 10;
    animation: ${slideDown} .5s cubic-bezier(0, 0, 0.4, 1.29);
`

const ModalContent =  styled.div`
`
const ModalHeader =  styled.div`
    padding: 15px;
    border-bottom: 1px solid #dedede;
    position: relative;
    background: #eee;
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
        top: -17.5px;
        color: #fff;
        right: -17.5px;
        cursor: pointer;   
    }
`
const ModalBody =  styled.div`
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

const Overlay =  styled.div`
    position: absolute;
    top: 0; left: 0;
    bottom: 0; right: 0;
    z-index: 1;
   
`

// const Error  = styled.div`
//     padding: 10px;
//     text-align: center;
//     background: #F44336;
//     margin: 0 0 20px;
//     color: #fff;
//     border-radius: 3px;
//     font-size: 14px;
// }

// `

class Form extends Component {
    constructor(props){
        super(props);
        this.state =  {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            isShowError: false,
            error: {
                isError: true,
                message: ''
            }
        }
    }

    onChange = (value, name) => {
        this.setState({
            [name] : value
        })

        if(
            this.state.firstname === '' || 
            this.state.lastname === '' || 
            this.state.email === '' || 
            this.state.password === '' || 
            this.state.address === '' || 
            this.state.phone === '' ) 
        {
            this.setState({
                error: {isError:true},
            })
        } else {
            this.setState({
                error: {isError:false}
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {firstname, lastname, email, password, address, phone} = this.state;

        const username = firstname + " " +lastname;

        if(this.state.error.isError === false) {

            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                firebase.database().ref('artisans/' + user.uid).update({username, email, password, address, phone});
                
                this.setState({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    address: '',
                    isShowError: false,
                    error: {
                        isError: true,
                        message: ''
                    }
                })
            })
            .catch(error => {
                console.log('error', error)
                this.setState({
                    isShowError: true,
                    error: {
                        isError: true,
                        message : error.message
                    }
                })
            })
        }
    }

    onClick = () => {
        this.props.closeModal();
    }
    

    render() {
        return (
            <Modal>
                <ModalDialog>
                    <ModalContent>
                        <ModalHeader>
                            <h4>Creare a Account</h4>
                            <span className="closeModal" onClick={this.onClick}>x</span>
                        </ModalHeader>
                        <ModalBody>
                            {/*{this.state.isShowError ? (<Error> {this.state.error.message}</Error>) : ''}*/}
                           
                            <form onSubmit={this.onSubmit} autoComplete="off">
                                <div className="row">   
                                    <div className="col-xs-6">
                                        <TextField 
                                            label="First Name"
                                            type="text" 
                                      
                                            placeholder="John"
                                            onChange={this.onChange} name="firstname" 
                                            value={this.state.firstname} />
                                    </div>
                                    <div className="col-xs-6">
                                        <TextField 
                                            label="Last Name"
                                            type="text" 
      
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
                                            placeholder="Type your phone"
                                            onChange={this.onChange} name="phone" 
                                            value={this.state.phone} />
                                    </div>
                                </div>

                                <button disabled={this.state.error.isError}>Fisnish</button>
                            </form>
                         </ModalBody>
                    </ModalContent>
                </ModalDialog>
                <Overlay onClick={this.onClick} />
            </Modal>
        );
    }
}

export default Form;