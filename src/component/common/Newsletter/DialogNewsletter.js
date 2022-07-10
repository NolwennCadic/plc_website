import NewsletterSubscription from "./NewsletterSubscription";
import { Modal, Button } from 'react-bootstrap';
import React from "react";
class DialogNewsletter extends React.Component {
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
        if (Object.keys(newErrors).length > 0) {
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
        if (this.state.emailData === null) {
            return newErrors;
        }
        if (this.state.emailData.firstName == null || this.state.emailData.firstName.trim() === "") {
            newErrors.firstNameError = "Veuillez entrer votre prénom";
        }
        if (!this.state.emailData.lastName == null || this.state.emailData.lastName.trim() === "") {
            newErrors.lastNameError = "Veuillez entrer votre nom";
        }
        if (this.state.emailData.emailAddress == null || !emailAddressRegex.test(this.state.emailData.emailAddress)) {
            newErrors.emailAddressError = "Veuillez entrer une adresse email valide"
        }
        return newErrors;
    }

    handleChange(event) {
        let emailData = { ...this.state.emailData }
        emailData[event.target.id] = event.target.value
        this.setState({
            emailData: emailData
        });
        console.log(this.state);
    }

    handleChangeCheck(event) {
        let emailData = { ...this.state.emailData }
        emailData[event.target.id] = event.target.checked
        this.setState({
            emailData: emailData
        });
        console.log(this.state);
    }

    //Ce composant devrait contenir les state pour le fermer --> Dialog est fait comme ça...
    render() {
        return (
            <Modal show={this.props.showDialog} onHide={() => { this.props.setShowDialog() }}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#004C38" }}>S'inscrire à la newsletter</Modal.Title>
                </Modal.Header>
                <div style={{ margin: "10px" }}>
                    <NewsletterSubscription
                        handleSubmit={this.handleSubmit}
                        emailData={this.state.emailData}
                        formErrors={this.state.formErrors}
                        handleChange={this.handleChange}
                        handleChangeCheck={this.handleChangeCheck}
                    />
                </div>
                <Modal.Footer>
                    <Button onClick={() => { this.props.setShowDialog() }} variant="secondary">Quitter</Button>
                    {/* Devrait être sorti du composant --> Only need the formCheck --> Mais n'a pas de onClick pour le moment */}
                    <Button onClick={this.handleSubmit} disabled={!this.state.emailData.formCheck} variant="primary" type="submit" style={{ backgroundColor: "#004C38", borderColor: "#004C38" }}>
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default DialogNewsletter;
