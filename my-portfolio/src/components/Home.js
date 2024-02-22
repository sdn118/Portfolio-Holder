import {Link} from "react-router-dom";
import blacktype from './../assets/blacktype.jpg';





function Home () {
return (
  <section className="home" id="home">
        <div className="start">

          <div className="image">
            <img src={blacktype} alt="black girl typing"/>
          </div>

          <div className="content">
            <h2>Hi there! My name is Sheree Nicholson and I'm an aspiring developer.</h2>
            <Link href="assets/Sheree_Nicholson_Resume.pdf" target="_blank" className="btn">Download Resume</Link>
          </div>

        </div>
      </section>
)
};

export default Home