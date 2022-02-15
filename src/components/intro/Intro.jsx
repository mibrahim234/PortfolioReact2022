import "./intro.scss"

export default function intro() {
  return (
    <div className='intro' id="intro">
      <div className="left"></div>
      <div className="imgContainer">
        <img src="assets/man.png" alt="Ibrahim Cheffing It Up" />     </div>
      <div className="right"> 
      <div className="wrapper">
        <h2>Hi There I'm </h2>
        <h1>Mohammad Ibrahim</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      {/* <a href="#portfolio">  
        <img src="assets/avatar.jpg" alt="" />
      </a> */}
      </div>
    </div>
  )
}
