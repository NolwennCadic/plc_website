import React, { useState } from "react";
import NewsletterSubscription from "./NewsletterSubscription";
import { isAddressEmailValid } from "../../../utils/sendEmailUtils";
import "./newsletter.css";

export function Unsubscribe() {
    // How to provoke the unsubscription
    const [emailData, setEmailData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        reason: "",
        formCheck: false,
    });
    const [formErrors, setFormErrors] = useState({
        firstNameError: "",
        lastNameError: "",
        emailAddressError: "",
    });

    function handleSubmit(event) {
        const newErrors = checkFormErrors();
        if (Object.keys(newErrors).length > 0) {
            event.preventDefault();
            setFormErrors(newErrors);
        } else {
            resetFormErrors();
            // TODO: uncomment line, for now commented to prevent sending emails and using monthly email quota
            // sendEmail(this.templateId, event.target);
            console.log("Email sent!");
            alert("Vous venez de vous désinscrire de la newsletter du cabinet PLC.");
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
        <div style={{display: "flex", alignItems: "center"}}>
                <div className="newsletter-unsuscribe">
                    <h4 style={{ color: "#004C38" }}>Se désinscrire de la newsletter</h4>
                    {/* Add a field to ask a reason? */}
                    <div style={{ margin: "10px" }}>
                        <NewsletterSubscription
                            type={"unsubscribe"}
                            handleSubmit={handleSubmit}
                            emailData={emailData}
                            formErrors={formErrors}
                            handleChange={handleChange}
                            handleChangeCheck={handleChangeCheck}
                        />
                        <div>Se désinscrire</div>
                    </div>
            </div>
        </div>
    )
}