import React, { useState } from "react";
import NewsletterSubscription from "./NewsletterSubscription";
import { Button } from 'react-bootstrap';
import { isAddressEmailValid, sendEmail } from "../../../utils/sendEmailUtils";
import "./newsletter.css";
import { SuccessUnsubscribe } from "./successUI/SuccessUnsubscribe";

export function Unsubscribe() {

    const templateId = 'template_ba8z2m9';

    // How to provoke the unsubscription
    const [emailData, setEmailData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        unsubscriptionReason: "",
        formCheck: false,
    });
    const [formErrors, setFormErrors] = useState({
        firstNameError: "",
        lastNameError: "",
        emailAddressError: "",
    });

    const [unsubscritionCompleted, setUnsubscritionCompleted] = useState(false)

    const handleSubmit = function handleSubmit(event) {
        const newErrors = checkFormErrors();
        if (Object.keys(newErrors).length > 0) {
            event.preventDefault();
            setFormErrors(newErrors);
        } else {
            resetFormErrors();
            setUnsubscritionCompleted(true);
            let formData = document.getElementById("subscription-form");
            // TODO: uncomment line, for now commented to prevent sending emails and using monthly email quota
            sendEmail(templateId, formData, false);
        }

    }

    function resetFormErrors() {
        const newFormErrors = {
            firstNameError: "",
            lastNameError: "",
            emailAddressError: ""
        };
        setFormErrors(newFormErrors);
    }

    function checkFormErrors() {
        let newErrors = {};
        if (emailData === null) {
            return newErrors;
        }
        if (emailData.firstName == null || emailData.firstName.trim() === "") {
            newErrors.firstNameError = "Veuillez entrer votre prénom";
        }
        if (!emailData.lastName == null || emailData.lastName.trim() === "") {
            newErrors.lastNameError = "Veuillez entrer votre nom";
        }
        if (emailData.emailAddress == null || !isAddressEmailValid(emailData.emailAddress)) {
            newErrors.emailAddressError = "Veuillez entrer une adresse email valide"
        }
        return newErrors;
    }

    function handleChange(event) {
        let newEmailData = { ...emailData }
        newEmailData[event.target.id] = event.target.value
        setEmailData(newEmailData);
    }

    function handleChangeCheck(event) {
        let newEmailData = { ...emailData }
        newEmailData[event.target.id] = event.target.checked
        setEmailData(newEmailData);
    }

    //Ce composant devrait contenir les state pour le fermer --> Dialog est fait comme ça...
    return (

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="newsletter-unsuscribe">
                {
                    unsubscritionCompleted
                        ?
                        <SuccessUnsubscribe />
                        :
                        <div>
                            <h4 style={{ color: "#004C38" }}>Se désinscrire à la newsletter</h4>
                            <div style={{ margin: "10px" }}>
                                <NewsletterSubscription
                                    type={"unsubscribe"}
                                    emailData={emailData}
                                    formErrors={formErrors}
                                    handleChange={handleChange}
                                    handleChangeCheck={handleChangeCheck}
                                />
                                <Button onClick={handleSubmit} variant="primary" type="submit" style={{ backgroundColor: "#004C38", borderColor: "#004C38" }}>
                                    Se désinscrire
                                </Button>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}
