import "./about.scss"
 

export default function Intro() {
  return (
    <div className='about' id="about">
    <h1>About Me (Fix Up)</h1>

      <div className="left">
      <div className="imgContainer">
        <img src="assets/man.png" alt="Ibrahim Cheffing It Up" />    
         </div>
         </div>
      <div className="right"> 
      <div className="wrapper">
        <h2> 
      Born and raised in New York City, I was exposed to many different cultures and unique ways of living life. Growing up here gave me the goal to travel the world. I want to see the beauties of the earth and experience different ways of living life. </h2>
    <h3> As a Marketing major, I graduated from Baruch college on the dean’s list. I enjoyed marketing but I was always curious about software development. The flexibility, the creativity, and the love for coffee intrigued me. Learning how to develop has been fun and I look forward to keep learning and growing. </h3>

        <h3>Full Stack Web Developer</h3>
      </div>
      <a href="#portfolio">
          <img src="assets/down.png" alt="Arrow to scroll down to next section" />
        </a>
      </div>
    </div>
  )
}

