import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Logo from './Logo';

const WrapHeader = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    z-index: 10;
    padding: 10px 0;
    box-shadow: 0px 5px 10px rgba(0,0,0,.1);

    &:before,&:after {
        content: '';
        display: table;
        clear: both;
    }
`

const WrapLogo = styled.div`
    float: left;
    max-width: 90px;
    
    img {
        display: block;
        max-width: 100%;
    }
`

const Nav = styled.div`
    margin-top: 7px;
    float: right;
    ul {
        margin: 0;
        list-style: none;
        padding: 0;

        > li {
            display: inline-block;
            margin: 0 0 0 15px;
            cursor: pointer;

            button {
                height: 40px;
                border: none;
                background: #fd6f1a;
                font-weight: 700;
                color: #fff;
                padding: 0 15px;
                border-radius: 3px;
                margin-left: 15px;
            }

            a {
                font-weight: 700;
                padding: 5px 10px;
                color: #313131;
                text-decoration: none;

            }

        }
    }
`
const Header = (props) => {
    return(
        <WrapHeader>
            <div className="container">
                <WrapLogo><Logo /></WrapLogo>
                <Nav>
                    <ul>
                        <li className="hidden-xs"><Link activeClass="active" spy={true} smooth={true} to="banner" duration={500}>Home</Link></li>
                        <li className="hidden-xs"><Link activeClass="active" spy={true} smooth={true} to="about" duration={500}>About us</Link></li>
                        <li className="hidden-xs"><Link activeClass="active" spy={true} smooth={true} to="howitwork" duration={500}>How it works</Link></li>
                        <li><button onClick={()=> props.onClick()}>Sign Up</button></li>
                    </ul>
                </Nav>
            </div>

        </WrapHeader>
    )
}

export default Header;