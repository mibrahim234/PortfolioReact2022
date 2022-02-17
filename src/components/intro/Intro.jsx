import "./intro.scss"
 

export default function Intro() {
  return (
    <div className='intro' id="intro">
      <div className="left">
      <div className="imgContainer">
        <img src="assets/man.png" alt="Ibrahim Cheffing It Up" />    
         </div>
         </div>
      <div className="right"> 
      <div className="wrapper">
        <h1>Hi, I’m Mohammad Ibrahim.</h1>
        <h2>A Full Stack Web Developer.</h2>
        <h3>Welcome to my portfolio site!</h3>
      </div>
      <a href="#portfolio">
          <img src="assets/down.png" alt="Arrow to scroll down to next section" />
        </a>
      </div>
    </div>
  )
}
