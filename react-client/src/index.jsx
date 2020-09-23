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