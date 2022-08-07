import React from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { isAddressEmailValid, sendEmail } from '../utils/sendEmailUtils';

class ContactForm extends React.Component {

  //TODO change template ID
  templateId = 'template_yb6wolh';

  constructor() {
    super();
    this.state = {
      formData: {
        firstName: "",
        lastName: "", 
        emailAddress: "",
        userMessage: ""
      },
      formErrors: {
        firstNameError: "",
        lastNameError: "",
        emailAddressError: "",
        userMessageError: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkFormErrors = this.checkFormErrors.bind(this);
    this.resetFormErrors = this.resetFormErrors.bind(this);
  }

  checkFormErrors() {
    let newErrors = {};

    if(!this.state.formData) {
        return newErrors;
    }
    if(!this.state.formData.firstName?.trim()) {
        newErrors.firstNameError = "Veuillez entrer votre prénom";
    }
    if(!this.state.formData.lastName?.trim()) {
        newErrors.lastNameError = "Veuillez entrer votre nom";
    }
    if(!isAddressEmailValid(this.state.formData.emailAddress)) {
        newErrors.emailAddressError = "Veuillez entrer une adresse email valide";
    }
    if(!this.state.formData.userMessage?.trim()) {
      newErrors.userMessageError = "Veuillez entre un message non vide";
    }
    return newErrors;
}

handleChange(event) {
  let formData = { ...this.state.formData }
  formData[event.target.id ]= event.target.value
  this.setState({
    formData: formData
  });
  console.log(this.state);
}


handleSubmit(event) {
  const newErrors = this.checkFormErrors();
  if(Object.keys(newErrors).length > 0) {
      event.preventDefault();
      this.setState({ formErrors: newErrors });
  } else {
      this.resetFormErrors();
      // TODO: uncomment line, for now commented to prevent sending emails and using monthly email quota
      // sendEmail(this.templateId, event.target);
      console.log("Email sent!");
      //TODO. améliorer le message
      alert("Merci d'avoir pris contact avec nous.");
  }
}

resetFormErrors() {
  const formErrors = {
      firstNameError: "",
      lastNameError: "",
      emailAddressError: ""
  };
  this.setState({ formErrors });
}


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="firstName">
            <Form.Control 
              type="text" 
              placeholder="Prénom" 
              onChange={this.handleChange}
              name="firstName" />
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Control 
              type="text" 
              placeholder="Nom" 
              onChange={this.handleChange}
              name="lastName" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="emailAddress">
        <Form.Control 
          type="email" 
          placeholder="adresse email" 
          onChange={this.handleChange}
          name="emailAddress" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="userMessage">
        <Form.Control 
          as="textarea" 
          rows={10} 
          placeholder="Votre message..." 
          onChange={this.handleChange}
          name="userMessage" />
      </Form.Group>
      <Button variant="primary" type="submit" >
          Envoyer
      </Button>
      </Form>
    );
  }
}

export default ContactForm;