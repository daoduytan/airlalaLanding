import React, { Component } from 'react';
import { Section, Heading} from './ui';
import styled from 'styled-components';
import Face from '../facebook.png';
import Twitter from '../twitter.png';
import In from '../in.png';

const ListContact = styled.ul`
    list-style: none;
    padding: 0;
    margin: 3s0px 0 30px;
    font-size: 20px;
    font-weight: 700;
    li {
        margin: 10px 0;
    }
`;
const ListSocials = styled.ul`
    list-style: none;
    padding: 0;
    margin: 30px 0 0;
    font-size: 20px;

    li {
        display: inline-block;
        margin: 0 30px;
    }
`;
const CopyRight = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    margin: 50px 0;
    font-weight: 700;
`

class Footer extends Component {
    render() {
        return (
            <Section>
                <div className="container">
                    <div className="text-center">
                        <Heading style={{marginBottom: '40px'}}><h2>Contact with Us</h2></Heading>
                        <p style={{marginBottom: '30px'}}>Join us to empower SMEs and local artisans in emerging markets</p>
                    
                        <ListContact>
                            <li>(+84) 962-24.90.16 </li>
                            <li>info@airlala.com </li>
                        </ListContact>
                        <div style={{color: '#797979'}}><i>Or follow us on social platform</i></div>
                        <ListSocials>
                            <li><img src={Face} alt=""/></li>
                            <li><img src={Twitter} alt=""/></li>
                            <li><img src={In} alt=""/></li>
                        </ListSocials>

                        <CopyRight>
                            <span>© 2017 AirLaLa</span>
                        </CopyRight>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Footer;