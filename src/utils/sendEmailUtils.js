import emailjs from '@emailjs/browser';
import $ from 'jquery';

const subscriptionTitleMessage = "Inscription à";
const unsubscriptionTitleMessage = "Désinscription de";

const subscriptionBodyMessage = "s'inscrire à";
const unSubscriptionBodyMessage = "se désinscrire de";

const generateTemplateParams = (formData, isSubscription) => {
    
    const titleMessage = isSubscription? subscriptionTitleMessage: unsubscriptionTitleMessage;
    const bodyMessage = isSubscription? subscriptionBodyMessage: unSubscriptionBodyMessage;
    formData.append('titleMessage', titleMessage);
    formData.append('bodyMessage', bodyMessage);
    let templateParams = {
        'titleMessage': titleMessage,
        'bodyMessage': bodyMessage
    };
    console.log($("#" + formData.getAttribute("id")).find('input.form-control'));
    $("#" + formData.getAttribute("id")).find('input.form-control').each((i, e) => templateParams[e.id] = e.value);
    return templateParams;
}
export const sendEmail = (templateId, formData, isSubscription) => {

    const templateParams = generateTemplateParams(formData, isSubscription);
    emailjs.send('service_fytcwuj', templateId, templateParams, 'NemyqjKhTrRpF5wyx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  export const sendEmailContactForm = (templateId, formData) => {

    debugger
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