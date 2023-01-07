import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { isAddressEmailValid, sendEmail } from "../../../utils/sendEmailUtils";
import NewsletterSubscription from "./NewsletterSubscription";
import { SuccessNewsletterSubscription } from "./successUI/SuccessNewsletterSubscription";

class DialogNewsletter extends React.Component {

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
            },
            showValidation: false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.checkFormErrors = this.checkFormErrors.bind(this);
        this.toggleShowValidation = this.toggleShowValidation.bind(this);
    }

    toggleShowValidation() {
        this.setState({ showValidation: !this.state.showValidation });
    }

    handleSubmit(event) {
        const newErrors = this.checkFormErrors();
        if (Object.keys(newErrors).length > 0) {
            event.preventDefault();
            this.setState({ formErrors: newErrors });
        } else {
            this.resetFormErrors();
            let formData = document.getElementById("subscription-form");
            // TODO: uncomment line, for now commented to prevent sending emails and using monthly email quota
            sendEmail(this.templateId, formData, true);
            this.toggleShowValidation();
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
        if (this.state.emailData === null) {
            return newErrors;
        }
        if (this.state.emailData.firstName == null || this.state.emailData.firstName.trim() === "") {
            newErrors.firstNameError = "Veuillez entrer votre prénom";
        }
        if (!this.state.emailData.lastName == null || this.state.emailData.lastName.trim() === "") {
            newErrors.lastNameError = "Veuillez entrer votre nom";
        }
        if (this.state.emailData.emailAddress == null || !isAddressEmailValid(this.state.emailData.emailAddress)) {
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
            <Modal show={this.props.showDialog} onHide={() => { this.props.setShowDialog() }} style={{ width: "100%" }}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#004C38" }}>S'inscrire à la newsletter</Modal.Title>
                </Modal.Header>
                {this.state.showValidation ?
                    <SuccessNewsletterSubscription /> :
                    <>
                        <div style={{ margin: "10px" }}>
                            <NewsletterSubscription
                                type={"subscribe"}
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
                    </>
                }
            </Modal>
        )
    }
}
export default DialogNewsletter;
