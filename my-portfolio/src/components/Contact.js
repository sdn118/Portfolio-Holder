import phone from "./../assets/phone.png";
import email from "./../assets/email.png";

function Contact () {
  return(
    <section className="contact">
        <h2>Contact Me</h2>
        
          <div className="contact-phone">
            <img src={phone} className="phone" alt="telephone icon" />
            <h4>Phone:</h4>
            <p>(734) 865-0876</p>
          </div>

        <div className="contact-email">
          <img src={email} className="email" alt="email icon" />
          <h4>Email:</h4>
          <p>sdnicholson8@gmail.com</p>
        </div>
      </section>
  )
};

export default Contact;