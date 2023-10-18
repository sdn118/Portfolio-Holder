import {Link} from "react-router-dom";

function Footer () {
  return(
    <footer>
      <ul className="bottom-container">
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="https://github.com/sdn118">GitHub</Link></li>
        <li> <Link to="/">Contact</Link></li>
      </ul>
    </footer>
  )
};

export default Footer