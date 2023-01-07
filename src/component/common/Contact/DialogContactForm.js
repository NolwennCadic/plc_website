import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { isAddressEmailValid, sendEmailContactForm } from "../../../utils/sendEmailUtils";
import ContactForm from "./ContactForm";

class DialogContactForm extends React.Component {

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
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkFormErrors = this.checkFormErrors.bind(this);
        this.resetFormErrors = this.resetFormErrors.bind(this);
    }

    handleSubmit(event) {
        const newErrors = this.checkFormErrors();
        if (Object.keys(newErrors).length > 0) {
            event.preventDefault();
            this.setState({ formErrors: newErrors });
        } else {
            debugger
            let formData = document.getElementById("contact-form");
            this.resetFormErrors();
            // TODO: uncomment line, for now commented to prevent sending emails and using monthly email quota
            sendEmailContactForm(this.templateId, formData);
            //TODO. améliorer le message
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

        if (!this.state.formData) {
            return newErrors;
        }
        if (!this.state.formData.firstName?.trim()) {
            newErrors.firstNameError = "Veuillez entrer votre prénom";
        }
        if (!this.state.formData.lastName?.trim()) {
            newErrors.lastNameError = "Veuillez entrer votre nom";
        }
        if (!isAddressEmailValid(this.state.formData.emailAddress)) {
            newErrors.emailAddressError = "Veuillez entrer une adresse email valide";
        }
        if (!this.state.formData.userMessage?.trim()) {
            newErrors.userMessageError = "Veuillez entre un message non vide";
        }
        return newErrors;
    }

    handleChange(event) {
        let formData = { ...this.state.formData }
        formData[event.target.id] = event.target.value
        this.setState({
            formData: formData
        });
    }

    handleChangeCheck(event) {
        let emailData = { ...this.state.emailData }
        emailData[event.target.id] = event.target.checked
        this.setState({
            emailData: emailData
        });
    }

    //Ce composant devrait contenir les state pour le fermer --> Dialog est fait comme ça...
    render() {
        return (
            <Modal show={this.props.showDialog} onHide={() => { this.props.setShowDialog() }}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#004C38" }}>Nous partager vos interrogations</Modal.Title>
                </Modal.Header>
                <div style={{ margin: "10px" }}>
                    <ContactForm
                        handleSubmit={this.handleSubmit}
                        emailData={this.state.emailData}
                        formErrors={this.state.formErrors}
                        handleChange={this.handleChange}
                        handleChangeCheck={this.handleChangeCheck}
                    />
                </div>
                <Modal.Footer>
                    {/* Do we need a "disabled" */}
                    <Button onClick={this.handleSubmit} variant="primary" type="submit" style={{ backgroundColor: "#004C38", borderColor: "#004C38" }}>
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default DialogContactForm;
