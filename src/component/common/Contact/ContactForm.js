import React from "react";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";

class ContactForm extends React.Component {

    render() {
        return (
            <Form id="contact-form">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Control
                  type="text"
                  placeholder="Prénom"
                  onChange={this.props.handleChange}
                  name="firstName" />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  onChange={this.props.handleChange}
                  name="lastName" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="emailAddress">
            <Form.Control
              type="email"
              placeholder="adresse email"
              onChange={this.props.handleChange}
              name="emailAddress" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userMessage">
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Votre message..."
              onChange={this.props.handleChange}
              name="userMessage" />
          </Form.Group>

            </Form>
        )
    }

}

export default ContactForm;
