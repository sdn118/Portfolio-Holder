import {Link} from "react-router-dom";



function Header () {
return (
  <Header className="head">
        <secion className="nav">
          <Link href="#home" className="welcome">Welcome</Link>

          <nav className="navbar">
            <Link href="#home">Home</Link>
            <Link href="https://github.com/sdn118">GitHub</Link>
            <Link href="https://www.figma.com/files/project/100878754/Team-project?fuid=1265841312311133633">Figma</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <div className="fas fa-bars" id="menu-btn"></div>
        </secion>
      </Header>
)
};

export default Header