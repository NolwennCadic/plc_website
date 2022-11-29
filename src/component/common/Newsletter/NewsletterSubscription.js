import React from "react";
import Form from 'react-bootstrap/Form';

class NewsletterSubscription extends React.Component {

    constructor() {
        super();
        this.isSubscription = this.isSubscription.bind(this);
    }

    isSubscription() {
        return this.props.type === "subscribe";
    }
    render() {
        console.log("this.props.type =", this.props.type);
        return (
            <Form id="subscription-form" >
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Control
                        type="text"
                        placeholder="Prénom"
                        value={this.props.emailData.firstName}
                        isInvalid={!!this.props.formErrors.firstNameError}
                        onChange={this.props.handleChange}
                        name="firstName" />
                    <Form.Control.Feedback type='invalid'>
                        {this.props.formErrors.firstNameError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Control
                        type="text"
                        placeholder="Nom"
                        value={this.props.emailData.lastName}
                        isInvalid={!!this.props.formErrors.lastNameError}
                        onChange={this.props.handleChange}
                        name="lastName" />
                    <Form.Control.Feedback type='invalid'>
                        {this.props.formErrors.lastNameError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailAddress">
                    <Form.Control
                        type="text"
                        placeholder="Adresse email"
                        value={this.props.emailData.emailAddress}
                        isInvalid={!!this.props.formErrors.emailAddressError}
                        onChange={this.props.handleChange}
                        name="emailAddress" />
                    <Form.Text className="text-muted">
                        {
                            this.isSubscription() ? 
                            "Nous ne partagerons pas votre adresse email avec des tiers"
                            : "Nous n'utiliserons votre adresse email que pour la supprimer de notre mailing liste"
                        }
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {this.props.formErrors.emailAddressError}
                    </Form.Control.Feedback>
                </Form.Group>
                {!this.isSubscription() &&
                    <Form.Group className="mb-3" controlId="unsubscriptionReason">
                        <div>Nous sommes triste d'apprendre votre départ. Si vous avez quelques secondes à nous accorder, pouvez-vous nous aider à nous améliorer et nous dire pourquoi ?</div>
                        <Form.Control
                            type="text"
                            placeholder="Raison"
                            value={this.props.emailData.reason}
                            onChange={this.props.handleChange}
                            name="reasons" />
                    </Form.Group>
                }
                {this.isSubscription() &&
                <Form.Group className="mb-3" controlId="formCheck">
                    <Form.Check
                        value={this.props.emailData.formCheck}
                        onChange={this.props.handleChangeCheck}
                        type="checkbox"
                        column="sm"
                        label= "En indiquant votre adresse email, vous acceptez de recevoir la newsletter du cabinet PLC. Vous pourrez vous désinscrire à tout moment par simple email."
                        style={{ fontSize: "13px" }}
                        />
                </Form.Group>


                }
                
            </Form>
        )
    }

}

export default NewsletterSubscription;
