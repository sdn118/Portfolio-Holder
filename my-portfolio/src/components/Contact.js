import phone from "./../assets/phone.png";
import email from "./../assets/email.png";

function Contact () {
  return(
    <section className="contact" id="contact">

        <h2 className="title">My Info</h2>
        <div className="tact">

          <div className="phone">
            <img src={phone} alt=""/>
            <h2>Cell: <span>(734) 865-0876</span></h2>
          </div>

          <div className="email">
            <img src={email} alt=""/>
            <h2>Email: <span>sdnicholson8@gmail.com</span></h2>
          </div>

        </div>

      </section>
  )
};

export default Contact;