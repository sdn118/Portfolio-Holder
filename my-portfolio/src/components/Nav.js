import {Link} from "react-router-dom";
import blacktype from "./../assets/blacktype.jpg"




function Nav () {
return (
  <nav>
    <ul className="container">
          <li><Link to="/">Home</Link></li>
          <li><Link to="https://github.com/sdn118" target="_blank">GitHub</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>

    <img src={blacktype} className="typing" alt="Black girl typing" />

      <div className="hero-text">
        <h1>Hi there! My name is Sheree and 
          I'm an aspiring front-end developer</h1>
        <button><Link to= {require ("../assets/Sheree_Nicholson_Resume.pdf")} target="_blank">Download Resume</Link></button>
    </div>
  </nav>
)
};

export default Nav