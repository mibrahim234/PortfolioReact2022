import { useState } from "react";
import "./works.scss"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "AlphaDev",
      desc:
        "This is a website about freelancers.",
      img:
      "./assets/Alphadev.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "MovieLand",
      desc:
        "Find the best movies on the web!",
      img:
      "./assets/movieland.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Discover Eats",
      desc:
        "Discover a whole new world of food with this app.",
      img:
      "./assets/discoverEats.png",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Coding Quiz",
      desc:
        "A quiz on JavaScript.",
      img:
      "./assets/runbuddy.png",
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "Project 5",
      desc:
        "Wait till we show you this one.",
      img:
      "./assets/hw1.png",
    },
    {
      id: "6",
      icon: "./assets/writing.png",
      title: "Project 6",
      desc:
        "The moment you have been waiting for!!!",
      img:
      "./assets/avatar.jpg",
    }
  ];


  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
              <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}