import "./about.scss"

export default function Intro() {
  return (
    <div className='about' id="about">

      <div className="left">
      <div className="imgContainer">
        <img src="assets/man.png" alt="Ibrahim Cheffing It Up" />    
         </div>
         </div>
      <div className="right"> 
      <div className="wrapper">

      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Born and raised in New York City, I was exposed to many different cultures and unique ways of living life. Growing up here gave me the goal to travel the world. I want to see the beauties of the earth and experience different ways of living life.
        </p>
        <p className="a-desc">
        As a Marketing major, I graduated from Baruch college on the dean’s list. I enjoyed marketing but I was always curious about software development.</p> 
        <p>The flexibility, the creativity, and the love for coffee intrigued me. Learning how to develop has been fun and I look forward to keep learning and growing.
        </p>

      </div>
      <a href="#portfolio">
          <img src="assets/down.png" alt="Arrow to scroll down to next section" />
        </a>
      </div>
    </div>
  )
}

