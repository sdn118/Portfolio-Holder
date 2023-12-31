import Nav from "./Nav";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import blacktype from "./../assets/blacktype.jpg"


function Homepage () {
  return (
    <>
      <img src={blacktype} className="typing" alt="Black girl typing" />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
};

export default Homepage