import phone from "./../assets/phone.png";
import email from "./../assets/email.png";

function Contact () {
  return(
    <section class="contact" id="contact">

        <h2 class="title">My Info</h2>
        <div class="tact">

          <div class="phone">
            <img src={phone} alt=""/>
            <h2>Cell: <span>(734) 865-0876</span></h2>
          </div>

          <div class="email">
            <img src={email} alt=""/>
            <h2>Email: <span>sdnicholson8@gmail.com</span></h2>
          </div>

        </div>

      </section>
  )
};

export default Contact;