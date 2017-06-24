import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Bg from '../bgBanner.jpg'

const style = {
    backgroundImage: 'url(' + Bg + ')',
    backgroundAttachment: 'fixed',
    textAlign: 'center'
}

const H3 = styled.h3`  
    margin: 0;
    color: #fff;
    font-size: 60px;

    @media (max-width: 700px) {
		font-size: 30px;
	}
`

const text = [
    'Empowering SMEs and local artisans in emerging markets',
    'Promoting and fostering local artisans and young entrepreneurs',
    'Matchmaking international buyers with local partners',
    'Together, we can nurture artinsanship and SMEs'
]

const slides = text.map((text, i) => {
    return <div key={i}><H3>{text}</H3></div>
})


const WrapBanner = styled.div` 
    height: 100vh;
    max-height: 700px;
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 700px) {
        max-height: 480px;
    }
`
const Banner = (props) => {
    var settings = {
        arrows: false,
        swipe: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return(
        <WrapBanner style={style}>
            <div className="container" style={{ marginTop: '100px' }}>
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div>
        </WrapBanner>
    )
}

export default Banner