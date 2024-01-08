import { useRef, useState } from "react"
import "./contact.scss"
import emailjs from '@emailjs/browser';


const Contact = () => {

    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_78n931k', 'template_vesopdv', formRef.current, 'b2NGU5JPcvFSZzwj2')
          .then((result) => {
              
              setSuccess(true)
          }, (error) => {
              setError(true)
              
          });
      };
  return (
    <div className="contact">
        <div className="textContainer">
            <h1>Let's work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>krmciftci17@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>Istanbul/Bahcelievler</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+90 541 723 2133</span>
            </div>
        </div>
        <div className="formContainer">
            <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" required placeholder="Name" name="name" />
                <input type="email" required placeholder="Email"  name="email"/>
                <textarea placeholder="Message" name="message"  rows={8}/>
                <button>Submit</button>
                {error && "Error" }
                {success && "Success" }
            </form>
        </div>
    </div>
  )
}

export default Contact