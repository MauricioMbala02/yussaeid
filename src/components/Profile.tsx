// import Photo from '../assets/Ellipse 4.png'
import Wallet from '../assets/yoast.svg'
import './Profile.css'

const Profile = () => {
  return (
    <div>
        <div className="profile">
          <div className="wallet">
              <img src={Wallet} alt={Wallet} />
              <p>Yussaeid</p>
            </div>
            {/* <div className="photo">
                <img src={Photo} alt={Photo} />
            </div> */}
        </div>
    </div>
  )
}

export default Profile