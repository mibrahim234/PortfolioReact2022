import "./topbar.scss"
import { Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Portfolio</a>
        </div>
        <div className="itemContainer">
          <Person className="icon"/>
          <span>(347)-932-9722</span>
        </div>

        <div className="itemContainer">
          <Mail className="icon" />
          <span>mohamm1417@gmail.com</span>
        </div>

        <div className="right">
        </div>
      </div>
    </div>
  )
}
