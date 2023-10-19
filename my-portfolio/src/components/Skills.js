import greencircle from "./../assets/greencircle.png";

function Skills () {
  return(

  <>
    <h2 className="skills">My skills</h2>
    <section className="skill-circle">
        <div className="green-circle1">
          <img src={greencircle} className="circle" alt="circle" />
        <h3>HTML</h3>
        </div>

        <div className="green-circle2">
          <img src={greencircle} className="circle" alt="circle" />
        <h3>CSS</h3>
        </div>

        <div className="green-circle3">
          <img src={greencircle}className="circle" alt="circle" />
        <h3>JS</h3>
        </div>

        <div className="green-circle4">
          <img src={greencircle} className="circle" alt="circle" />
        <h3>REACT</h3>
        </div>

      </section>
      </>
  )
};

export default Skills