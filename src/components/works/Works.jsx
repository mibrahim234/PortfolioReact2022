import "./works.scss"

export default function Works() {
  return (
    <div className='works' id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="" alt="" />
                </div>
                <h2>Title</h2>
                <p>Description:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat asperiores laboriosam molestiae repudiandae ipsa minima praesentium id, et ratione tenetur qui quisquam ducimus quidem aspernatur porro. Corporis, inventore odio!</p>
                <span>Projects</span>
              </div>
               </div>
            <div className="right">
              <img src="assets/Alphadev.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  )
}
