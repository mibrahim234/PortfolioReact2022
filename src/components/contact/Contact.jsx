import "./contact.css";
import Phone from "../../img/phone.png";
import { useState} from "react";
import { LinkedIn, Mail } from "@material-ui/icons";
import { validateEmail } from '../../utils/helpers';



 function Contact ()  {
 const [amessage, setMessage] = useState(false);
 const [formState, setFormState] = useState({ name: '', subject: '', email: '', message: ''});


 const [errorMessage, setErrorMessage] = useState('');
 const {name, subject, email, message } = formState; 


 const handleSubmit = (e) => {
   e.preventDefault();
    setMessage(true);
    if(!errorMessage) {
      console.log('Submit Form', formState)
    }
   };
    
   const handleChange = (e) => {
     if (e.target.name === 'email') {
       const isValid = validateEmail(e.target.value);
       if(!isValid) {
         setErrorMessage('Your Email is Invalid');
       } else {
         setErrorMessage('');
       }
     } else {
       if(!e.target.value.length) {
         setErrorMessage(`${e.target.name} is required.`);
       } else {
         setErrorMessage('');
       }
     }
     if(!errorMessage) {
       setFormState({ ...formState, [e.target.name]: e.target.value });
       console.log('Handle Form', formState);
     }
   };

  return (
    <div className="contact" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        {/* Left container */}
        <div className="c-left">
          <h1 className="c-title">Let's get in touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (347) 932-9722
            </div>
            <div className="c-info-item">
            <Mail className="c-icon"/>
             <span> <a href="mailto:mohamm1417@gmail.com" target="_blank">mohamm1417@gmail.com</a> </span>
            </div>

            <div className="c-info-item">
          <LinkedIn className="c-icon"/>
          <span> <a href="https://www.linkedin.com/in/mohammad-ibrahim1/" target="_blank">LinkedIn</a></span> 
        </div>
          </div>
        </div>

        {/* Right side container  */}
        {/* OnBlur used with form validation */}
 <div className="c-right">
  <form onSubmit={handleSubmit}>
    {/* NAME */}
  <input type="text" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange} />

  {/* Subject */}
<input type="text" placeholder="Subject" name="subject" defaultValue={subject} onBlur={handleChange} />

{/* Email */}
<input type="text" placeholder="Email" name="email" defaultValue={email} onBlur={handleChange} />

{/* Message */}
<textarea name="message" placeholder="Message" rows="5" defaultValue={message} onBlur={handleChange}></textarea>
{errorMessage && <span className="span1">{errorMessage}</span>}
<br></br>
<button>Send</button>
<br></br>
{amessage && <span className="span1">Thank you, I'll contact you shortly!</span>}
</form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
