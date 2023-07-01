import { Link } from "react-router-dom"
import home from "../assets/home.svg"
import carbonResult from "../assets/carbon_result.svg"
import bookmark from "../assets/bookmark.svg"
import bxUser from "../assets/bx_user.svg"
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav id="menu">
        <Link to=""><img src={home} alt={home} /></Link>
        <Link to=""><img src={carbonResult} alt={carbonResult} /></Link>
        <Link to=""><img src={bookmark} alt={bookmark} /></Link>
        <Link to=""><img src={bxUser} alt={bxUser} /></Link>
      </nav>
    </div>
  )
}

export default Navbar