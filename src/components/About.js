import React from 'react';
import styled from 'styled-components';
import { Section, Heading} from './ui';
import mockup from '../mockup.png';

export const Ul = styled.ul`
    list-style: none;
    padding: 0 50px 0 0;
    margin: 30px 0;
    font-size: 18px;
    line-height: 30px;

    li {
        padding-left: 30px;
        margin-bottom: 15px;
        position: relative;

        &:before {
            content: "";
            display: block;
            height: 10px; width: 10px;
            border-radius: 50%;
            background: #11c6c8;
            position: absolute;
            top: 12px; left: 0;
        }
    }

    @media (max-width: 1199px) {
        padding-right: 0;
        font-size: 16px;
	}
`

const About = (props) => {
    return(
        <Section style={{overflow: 'hidden'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <Heading><h2>What makes <span>Airlala</span> outstanding.</h2></Heading>
                        <Ul>
                            <li>A diversified founding team: technology, retailers, artisans, and finance.</li>
                            <li>We have unique experience in nurture and foster innovation and entrepreneurship.</li>
                            <li>We understand the problems of SMEs and local artisans since our team studied and lived in many countries: Asia, Europe, America.</li>
                            <li>We have a strong determination to leverage technology to make meaningful impacts in emerging markets.</li>
                        </Ul>
                    </div>
                    <div className="col-md-7 col-sm-6">
                        <div className="img">
                            <img src={mockup} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About