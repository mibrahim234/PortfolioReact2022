import "./topbar.scss"
import { Person, Mail, LinkedIn} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mohammad Ibrahim 
            </a>

        <div className="itemContainer">
          <LinkedIn className="icon"/>
          <span> <a href="https://www.linkedin.com/in/mohammad-ibrahim1/" target="_blank">LinkedIn</a></span>         
          </div>

        <div className="itemContainer">
          <Mail className="icon" />
          <span> <a href="mailto:mohamm1417@gmail.com" target="_blank">Email</a> </span>
          </div>
        </div>

        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>

            </div>
        </div>
      </div>
    </div>
  )
}
