import "./portfolio.scss"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
 const [selected, setSelected] = useState("featured");

 const list = [
    {
      id: "alphaDev",
      title: "AlphaDev",
    },
    {
      id: "movieLand",
      title: "MovieLand",
    },
    {
      id: "discoverEats",
      title: "DiscoverEats",
    },
    {
      id: "codingQuiz",
      title: "CodingQuiz",
    },
    {
      id: "project5",
      title: "Project5",
    },
    {
      id: "project6",
      title: "Project6",
    },
  ];

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      {list.map(item=>( 
        <PortfolioList title={item.title}
        active={selected === item.id}
        setSelected={setSelected}
        id={item.id}
        /> 
      ))}
      </ul>
      
      <div className="container">
        <div className="item">
          <img src="assets/Alphadev.png" alt="AlphaDev App" />
          <h3>AlphaDev</h3>
        </div>

        <div className="item">
          <img src="assets/avatar.jpg" alt="AlphaDev App" />
          <h3>AlphaDev</h3>
        </div>

        <div className="item">
          <img src="assets/Alphadev.png" alt="AlphaDev App" />
          <h3>AlphaDev</h3>
        </div>

        <div className="item">
          <img src="assets/avatar.jpg" alt="AlphaDev App" />
          <h3>AlphaDev</h3>
        </div>

        <div className="item">
          <img src="assets/Alphadev.png" alt="AlphaDev App" />
          <h3>AlphaDev</h3>
        </div>

        <div className="item">
          <img src="assets/avatar.jpg" alt="AlphaDev App" />
          <h3>AlphaDev</h3>
        </div>

      </div>
    </div>
  )
}
