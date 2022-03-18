import "./contact.css";
import Phone from "../../img/phone.png";
import { useState} from "react";
 // import emailjs from "emailjs-com";
import { LinkedIn, Mail } from "@material-ui/icons";
import { validateEmail } from '../../utils/helpers';


 function Contact ()  {
 const [message, setMessage] = useState(false);

const handleSubmit = (e) => {
   e.preventDefault();
    setMessage(true);
   };
    

  return (
    <div className="contact" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
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
 <div className="c-right">

  <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Name" name="user_name" />
<input type="text" placeholder="Subject" name="user_subject" />
<input type="text" placeholder="Email" name="user_email" />
<textarea name="message" placeholder="Message" rows="5"></textarea>
<br></br>
<button>Submit</button>
{done && "Thank you, I'll contact you shortly!"}
</form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
