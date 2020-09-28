import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      email: '',
      birthdate: '',
      emailConsent: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users`)
      .then(res => {
        this.setState({ id: res.data[0].id });
        // console.log(res.data[0].id);
      })
  }


  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleCheck() {
    this.setState({
      emailConsent: !this.state.emailConsent,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

      const contact = {
        id: (this.state.id + 1),
        name: this.state.name,
        email: this.state.email,
        birthdate: this.state.birthdate,
        emailConsent: this.state.emailConsent
      };

      let pack = [contact];
      
      console.log(JSON.stringify(pack));
      // axios.post(`your api route here`, { contact })
      //   .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //     alert('Success! Someone will reach out to you shortly via email.');
      //     this.clearForm();
      //   })
    
  }
  
  clearForm() {
    // console.log('cleared');
    this.setState({
      name: '',
      email: '',
      birthdate: '',
      emailConsent: false
    });
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        
        <FieldLabel htmlFor='name'>Name: </FieldLabel>
        <Input type="text" value={this.state.name} required={true} onChange={this.handleChange} id='name' />
        
        <FieldLabel htmlFor='email'>Email: </FieldLabel>
        <Input type="email" value={this.state.email} required={true} onChange={this.handleChange} id='email' />
        
        <FieldLabel htmlFor='birthdate'>Birth date: </FieldLabel>
        <Input type="date" value={this.state.birthdate} min="1900-01-01" max="2015-01-01" onChange={this.handleChange} id='birthdate' />
        
        <div>
          <input id="emailConsent" type="checkbox" required={true} onChange={this.handleCheck} />
          <EmailConsentLabel htmlFor="emailConsent"> I agree to be contacted via email</EmailConsentLabel>
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

const EmailConsentLabel = styled(FieldLabel)`
  font-size: 1em;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #bd516c;
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