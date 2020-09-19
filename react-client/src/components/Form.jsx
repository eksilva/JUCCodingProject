import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      birthdate: '',
      consent: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleCheck(event) {
    this.setState({
      consent: !this.state.consent,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
  clearForm() {
    this.setState({
      name: '',
      email: '',
      birthdate: '',
      consent: false
    })
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FieldLabel for='name'>Name: </FieldLabel>
        <Input type="text" value={this.state.name} onChange={this.handleChange} name='name' />
        <FieldLabel for='email'>Email: </FieldLabel>
        <Input type="text" value={this.state.email} onChange={this.handleChange} name='email' />
        <FieldLabel for='birthdate'>Birth date: </FieldLabel>
        <Input type="text" value={this.state.birthdate} onChange={this.handleChange} name='birthdate' />
        <input name="consent" type="checkbox" checked={this.state.consent}onChange={this.handleCheck} /> <p>I agree to be contacted via email</p>
        <div>
          <Button type='button' >Clear</Button>
          <Button type='submit' >Submit</Button>
        </div>
        
      </StyledForm>
    )
  }
}

const FieldLabel = styled.label`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2em;
  color: #f8c53e;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: #a83451;
  color: #f8c53e;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bd516c;
  border-radius: 6px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

`;

export default Form;