import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { sendEmail } from "../utils/sendEmailUtils";

class NewsletterSubscription extends React.Component {

    templateId = 'template_ba8z2m9';

    constructor() {
        super();
        this.state = {
            emailData: {
                firstName: "",
                lastName: "",
                emailAddress: "",
                formCheck: false
            }, 
            formErrors: {
                firstNameError: "",
                lastNameError: "",
                emailAddressError: ""
            }
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.checkFormErrors = this.checkFormErrors.bind(this);
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
            alert("Vous venez de vous inscrire à la newsletter du cabinet PLC.");
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

    checkFormErrors() {
        let newErrors = {};
        let emailAddressRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        
        if(this.state.emailData === null) {
            return newErrors;
        }
        if(this.state.emailData.firstName == null || this.state.emailData.firstName.trim() === "") {
            newErrors.firstNameError = "Veuillez entrer votre prénom";
        }
        if(!this.state.emailData.lastName == null || this.state.emailData.lastName.trim() === "") {
            newErrors.lastNameError = "Veuillez entrer votre nom";
        }
        if (this.state.emailData.emailAddress == null || !emailAddressRegex.test(this.state.emailData.emailAddress)) {
            newErrors.emailAddressError = "Veuillez entrer une adresse email valide"
        }
        return newErrors;
    }

    handleChange(event) {
        let emailData = { ...this.state.emailData }
        emailData[event.target.id ]= event.target.value
        this.setState({
         emailData: emailData
        });
        console.log(this.state);
    }

    handleChangeCheck(event) {
        let emailData = { ...this.state.emailData }
        emailData[event.target.id ]= event.target.checked
        this.setState({
            emailData: emailData
        });
        console.log(this.state);
    }


    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Control 
                        type="text" 
                        placeholder="Prénom" 
                        value={this.state.emailData.firstName} 
                        isInvalid={!!this.state.formErrors.firstNameError} 
                        onChange={this.handleChange}
                        name="firstName" /> 
                    <Form.Control.Feedback type='invalid'>
                        { this.state.formErrors.firstNameError }
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Control 
                        type="text" 
                        placeholder="Nom" 
                        value={this.state.emailData.lastName} 
                        isInvalid={!!this.state.formErrors.lastNameError}
                        onChange={this.handleChange}
                        name="lastName" />
                    <Form.Control.Feedback type='invalid'>
                        { this.state.formErrors.lastNameError }
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailAddress">
                    <Form.Control 
                        type="text" 
                        placeholder="Adresse email" 
                        value={this.state.emailData.emailAddress} 
                        isInvalid={!!this.state.formErrors.emailAddressError}
                        onChange={this.handleChange} 
                        name="emailAddress" />
                    <Form.Text className="text-muted">
                        Nous ne partagerons pas votre adresse email avec des tiers
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        { this.state.formErrors.emailAddressError }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheck">
                    <Form.Check 
                    value={this.state.emailData.formCheck} 
                    onChange={this.handleChangeCheck} 
                    type="checkbox" 
                    column="sm" 
                    label="En indiquant votre adresse mail, 
                    vous acceptez de recevoir la newsletter du cabinet PLC. 
                    Vous pourrez vous désinscrire à tout moment par simple email." />
                </Form.Group>
                <Button disabled={!this.state.emailData.formCheck} variant="primary" type="submit" >
                    Envoyer
                </Button>
            </Form>
        )
    }

}

export default NewsletterSubscription;