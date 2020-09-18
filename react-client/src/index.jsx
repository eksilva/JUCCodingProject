import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      birthdate: '',
      consent: false
    }
  }

  render() {
    return(
      <Layer1>
        <H1>Contact Form</H1>
      </Layer1>
    )
  }

}

const Layer1 = styled.div`
padding: 15px;
padding-left: 45px;
margin: 50px;
height: 700px;
width: 500px;
border-radius: 40px;
background: #3b3fba;
box-shadow:  13px 13px 26px #292c82, 
             -13px -13px 26px #4d52f2;
`;

const H1 = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  color: #f8c53e;
`;
ReactDOM.render(<App />, document.getElementById('App'));