import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { useState, useRef} from "react";
 // import emailjs from "emailjs-com";
import { LinkedIn } from "@material-ui/icons";


 const Contact = () => {
//   const formRef = useRef();
//  const [done, setDone] = useState(false);

//  const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_6fuz7cp",
//         "template_9chw2o8",
//         formRef.current,
//         "user_pKrnkSoRtlwzu8n1WSHDY"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true)
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//       e.target.reset();
//   };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's get in touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1(347)932-9722
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              mohamm1417@gmail.com
            </div>

            <div className="c-info-item">
          <LinkedIn className="c-icon"/>
          <span>LinkedIn</span> 
        </div>
          </div>
        </div>
 <div className="c-right">

  <form>
   {/* </div>ref={formRef} onSubmit={handleSubmit}> */}
  <input type="text" placeholder="Name" name="user_name" />
<input type="text" placeholder="Subject" name="user_subject" />
<input type="text" placeholder="Email" name="user_email" />
<textarea name="message" placeholder="Message" rows="5"></textarea>
<button>Submit</button>
{/* {done && "Thank you, I'll contact you shortly!"} */}
</form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
