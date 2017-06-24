import React from 'react';

import { Section, Heading, Button } from './ui';
import Bg from '../bg.jpg';

const Register = (props) => (
    <Section style={{ background: ' url(' + Bg + ' ) no-repeat center ', backgroundSize: 'cover', padding: '100px 0 120px', margin: '0 0 30px' }}>
        <div className="container text-center">

            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <Heading style={{ color: '#fff' }}><h2>Vestibulum ante ipsum primis</h2></Heading>
                    <p style={{ fontSize: '18px', color: '#fff', lineHeight: '30px' }}> Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.</p>

                    <Button onClick={()=> props.onClick()}>Create a account now</Button>
                </div>
            </div>
        </div>
    </Section>
)

export default Register;