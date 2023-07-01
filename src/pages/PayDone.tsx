import { Link } from "react-router-dom"
import like from '../assets/like.gif'
import CheckCircle from '../assets/Check Circle.svg'
import '../components/PayDone.css'

const PayDone = () => {
  return (
    <div>
      <div className="PayDone">
        <div className="like">
          <img src={like} alt={like} />
        </div>
        <div className="desc-PayDone">
          <h1>Payment done <img src={CheckCircle} alt={CheckCircle} /></h1>
          <p>Your recipe has been uploaded,
          you can see it on your profile</p>
          <Link to={'/'}><button>Back to Home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default PayDone