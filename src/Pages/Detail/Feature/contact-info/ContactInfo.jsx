import React, { useState } from 'react'
import { useValidationHook } from '../../../../Hooks/useValidationHook';

const ContactInfo = ({trigger}) => {

    const { errors, onFormSubmit } = useValidationHook();
    const [sentMessage, setSentMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(onFormSubmit(e)){
            setSentMessage("Message sent successfully");
        }
    };

  return (
    <div className="contact">
        <div className="save-button">
            <button className="btn" onClick={trigger}>Save Property</button>
        </div>
        <div className="contact-info">

      <h2>Contact Agent</h2>

      <form onSubmit={ submitHandler }>
        
        <input type="text" name="name" placeholder="Full Name *" />
        {errors.name && <p className="error">{errors.name}</p>}
        <input type="email" name="email" placeholder="Email *" />
        {errors.email && <p className="error">{errors.email}</p>}
        <input type="number" name="phone" placeholder="Phone Number *" />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <textarea name="message" placeholder="Comments *"></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        
        <div className="sbmButton">
          <button type="submit" className="btn">Contact Now</button>
        </div>
        {sentMessage && <p className="success">{sentMessage}</p>}
      </form>
      </div>
    </div>
  
  )
}

export default ContactInfo