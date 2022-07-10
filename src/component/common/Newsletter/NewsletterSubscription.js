import React from "react";
import Form from 'react-bootstrap/Form';

class NewsletterSubscription extends React.Component {

    templateId = 'template_ba8z2m9';


    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                {/* <Form onSubmit={this.props.handleSubmit}> */}
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
                        Nous ne partagerons pas votre adresse email avec des tiers
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {this.props.formErrors.emailAddressError}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheck">
                    <Form.Check
                        value={this.props.emailData.formCheck}
                        onChange={this.props.handleChangeCheck}
                        type="checkbox"
                        column="sm"
                        label="En indiquant votre adresse mail,
                    vous acceptez de recevoir la newsletter du cabinet PLC.
                    Vous pourrez vous désinscrire à tout moment par simple email." />
                </Form.Group>

            </Form>
        )
    }

}

export default NewsletterSubscription;
