import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <span>Kerem Ciftci</span>
            <div className="social">
                <a className="icon" href="#"><img src="/facebook.png" alt="" /></a>
                <a className="icon" href="#"><img src="/github.png" alt="" /></a>
                <a className="icon" href="#"><img src="/instagram.png" alt="" /></a>
                <a className="icon" href="#"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
