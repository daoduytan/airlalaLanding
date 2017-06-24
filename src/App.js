import React, { Component } from 'react';
import { Element } from 'react-scroll';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import HowItWork from './components/HowItWork';
import Register from './components/Register';
import Footer from './components/Footer';
import Form from './components/Form';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForm: false
    }
  }

  closeModal = () => {
    this.setState({ isForm: false })
  }

  onClick = () => {
    this.setState({ isForm: true })
  }
  render() {
    return (
      <div className='wrapper'>
        <Header onClick={this.onClick}/>
        <Element name="banner" className="banner section">
          <Banner />
        </Element>
        <Element name="about" className="about section">
          <About />
        </Element>
        <Element name="howitwork" className="howitwork section">
          <HowItWork />
        </Element>
        <Register onClick={this.onClick}/>
        <Footer />
        {this.state.isForm ? <Form closeModal={this.closeModal} /> : ''}
      </div>
    );
  }
}

export default App;
