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
    this.handleCheck = this.handleCheck.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleCheck() {
    this.setState({
      consent: !this.state.consent,
    })
  }

  handleSubmit(event) {
    console.log('submitted');
    event.preventDefault();
  }
  
  clearForm() {
    // console.log('cleared');
    this.setState({
      name: '',
      email: '',
      birthdate: '',
      consent: false
    });
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        
        <FieldLabel htmlFor='name'>Name: </FieldLabel>
        <Input type="text" value={this.state.name} onChange={this.handleChange} name='name' />
        
        <FieldLabel htmlFor='email'>Email: </FieldLabel>
        <Input type="text" value={this.state.email} onChange={this.handleChange} name='email' />
        
        <FieldLabel htmlFor='birthdate'>Birth date: </FieldLabel>
        <Input type="text" value={this.state.birthdate} onChange={this.handleChange} name='birthdate' />
        
        <div>
          <input name="consent" type="checkbox" checked={this.state.consent} onChange={this.handleCheck} />
          <ConsentLabel htmlFor="consent"> I agree to be contacted via email</ConsentLabel>
        </div>
        
        <ButtonDiv>
          <Button1 type='button' onClick={this.clearForm}>Clear</Button1>
          <Button2 type='submit' >Submit</Button2>
        </ButtonDiv>
        
      </StyledForm>
    )
  }
}

const FieldLabel = styled.label`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2em;
  color: #f8c53e;
`;

const ConsentLabel = styled(FieldLabel)`
  font-size: 1em;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Button1 = styled.button`
  background: #a83451;
  color: #f8c53e;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1em;
  margin: 1em 0 0 0;
  padding: 0.25em 1em;
  border: 2px solid #bd516c;
  border-radius: 6px;
`;

const Button2 = styled(Button1)`
  background: #479454;
  border: 2px solid #46724d;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

`;

export default Form;