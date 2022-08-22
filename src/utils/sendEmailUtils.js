import emailjs from '@emailjs/browser';

export const sendEmail = (templateId, formData) => {

    emailjs.sendForm('service_fytcwuj', templateId, formData, 'NemyqjKhTrRpF5wyx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

export const isAddressEmailValid = (emailAddress) => {
    let emailAddressRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    return emailAddressRegex.test(emailAddress);
}