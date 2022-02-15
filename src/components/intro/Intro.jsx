import "./intro.scss"
 // import { init } from "ityped";
 // import { useEffect, useRef } from "react";


export default function Intro() {
 // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);
  
  return (
    <div className='intro' id="intro">
      <div className="left">
      <div className="imgContainer">
        <img src="assets/man.png" alt="Ibrahim Cheffing It Up" />    
         </div>
         </div>
      <div className="right"> 
      <div className="wrapper">
        <h2>Hi There I'm </h2>
        <h1>Mohammad Ibrahim</h1>
        <h3>Full Stack Web Developer

        </h3>
      </div>
      <a href="#portfolio">
          <img src="assets/down.png" alt="Arrow to scroll down to next section" />
        </a>
      </div>
    </div>
  )
}
