import React from 'react';
import TextInput from './components/TextInput';
import componentStyles from './styles/componentStyles';


const ContactForm = () => (
  <div style={componentStyles.bodyStyle}>
    <p style={componentStyles.headerStyle}>Contact Me</p>
    <p style={componentStyles.textStyle}>Want to reach out to me?
    Feel free to send an email to alexwu606 |at| gmail |dot| com,
    or send a message to me using the contact form below.
    </p>
    <form action="https://formspree.io/alexwu606@gmail.com" method="POST" >
      <TextInput
        style={componentStyles.formInputStyle}
        name="email"
        type="email"
        id="email"
        placeholder="Email Address"
      />
      <TextInput
        style={componentStyles.formInputStyle}
        name="body"
        type="text"
        id="message"
        placeholder="Your Message"
      />
      <input
        style={componentStyles.buttonStyle}
        type="submit"
        value="Submit"
      />
    </form>
  </div>
);
export default ContactForm;

