import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import styled from 'styled-components';

import Form from './components/Form.jsx';

const App = () => (
  
  <Layer1>
    <H1>Contact Form</H1>
    <Form />
  </Layer1>
    
)

const Layer1 = styled.div`
padding: 30px;
padding-top: 10px;
margin: 50px;
border: 1px solid rgb(98, 243, 158);
// border-radius: 4px;
background: #053449;
// box-shadow:  4px 0px 8px #1c2e36, 
            -4px 0px 8px #1c2e36,
            0px -4px 8px #1c2e36,
            0px 4px 8px #1c2e36;
`;

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  color: rgb(212, 153, 212);
`;
ReactDOM.render(<App />, document.getElementById('App'));