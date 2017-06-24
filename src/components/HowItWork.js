import React from 'react';
import { Section, Heading, Img, TextBuyer, TextArtisan, H4} from './ui';
import Img1 from '../img1.jpg';
import Img2 from '../img2.jpg';

const HowItWork = () => {
    return(
        <Section style={{marginTop: '-150px'}}>
            <div className="container">
                <Heading className="text-center" style={{ marginBottom: '100px' }}><h2>How it Works</h2></Heading>

                <div className="row" style={{ marginBottom: '100px' }}>
                    <div className="col-md-6">
                        <Img shadow>
                            <img src={Img1} alt="" />
                        </Img>
                    </div>
                    <div className="col-md-6">
                        <TextBuyer>
                            <H4>for international buyers</H4>
                            <ul>
                                <li>Users download the app and enter a bit of information about the what they are looking for: style, budget, types of products, budget, handmade or mass productions, quantities</li>
                                <li>
                                    Airlala then filters that information through its database of thousands of retailers and brands
                                </li>
                                <li>Airlala will release the recommendations about potential gifts to users</li>
                                <li>Users can make the purchase directly from the app. Airlala offers the entire funnel of gift-giving.</li>
                            </ul>
                        </TextBuyer>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-md-push-6">
                        <Img shadow>
                            <img src={Img2} alt="" />
                        </Img>
                    </div>
                    <div className="col-md-6 col-md-pull-6">
                        <TextArtisan>
                            <H4>for local artisans</H4>
                            <ul>
                                <li>Retailers and brands will download the app, and register to be a verified partners on the platform.</li>
                                <li>
                                    Retailers and brands will input their products’ information to Airlala
                                </li>
                                <li>
                                    Airlala will matchmake the products from Retailers and Brands to potential buyers
                                </li>
                                <li>
                                    After matching successfully, Airlala offers the entire funnel of gift-sending.
                                </li>
                            </ul>
                        </TextArtisan>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default HowItWork