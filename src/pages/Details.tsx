import { Link } from "react-router-dom"
import Donatenow2 from "../components/Donatenow2"
import unsplash from '../assets/Group 4.svg'
import unsplash1 from '../assets/Group 7.svg'
import IconYussaeid from '../assets/Vector (3).svg'
import Donated from '../assets/Group 6.png'
import '../components/Details.css'

const Details = () => {
  return (
    <div>
      <div className="headerDetails">
        <div className="PhotoDetails"></div>
        <div className="nav">
          <Link to={'/'}><img src={unsplash} alt={unsplash} /></Link>
          <Link to=''><img src={unsplash1} alt={unsplash1} /></Link>
        </div>
      </div>

      <div className="desc-Details">
        <h1>Donate for kids to their well being</h1>
        <div className="sub">
          <img src={IconYussaeid} alt={IconYussaeid} />
          <h2>Yussaeid Foundation</h2>
        </div>
        <p>
        We accomplish this through our unique network of health professionals and orga nization committed to improving health policies and practices, Yussaeid Foundation is a nonprofit providing life saving medical care to children aims at creating a long and 
        </p>
        <span>+more</span>
      </div>

      <div className="full-donate">
        <div className="donated">
          <p>2000+ Donated</p>
          <img src={Donated} alt={Donated} />
        </div>

        <div className="totalDonation">
          <span>Total Donation</span>
          <p>$3456.08</p>
        </div>
      </div>

      <Link to={'/Donation'}><Donatenow2 /></Link>
    </div>
  )
}

export default Details