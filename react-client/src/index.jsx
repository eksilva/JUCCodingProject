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
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));