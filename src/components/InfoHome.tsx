import { Link } from 'react-router-dom'
import Stethoscope from '../assets/Stethoscope.svg'
import StudentCenter from '../assets/Student Center.svg'
import AnimalShelter from '../assets/Animal Shelter.svg'
import Vector from '../assets/Vector.svg'
import PhotoDonation from '../assets/unsplash_GVg-x4MiriM.png'
import iconDonate from '../assets/iconDonate.svg'
import foudation from '../assets/unsplash_M74Pihi2vz8.png'
import './InfoHome.css'

const InfoHome = () => {
  return (
    <div>
        <div className="categories">
            <div className="container-categories">
                <div className="photo-categories">
                    <img src={Stethoscope} alt={Stethoscope} />
                </div>
                <div className="desc-categories">
                    <p>Health</p>
                </div>
            </div>

            <div className="container-categories">
                <div className="photo-categories">
                    <img src={StudentCenter} alt={StudentCenter} />
                </div>
                <div className="desc-categories">
                    <p>Education</p>
                </div>
            </div>

            <div className="container-categories">
                <div className="photo-categories">
                    <img src={AnimalShelter} alt={AnimalShelter} />
                </div>
                <div className="desc-categories">
                    <p>Animals</p>
                </div>
            </div>

            <div className="container-categories">
                <div className="photo-categories">
                    <img src={Vector} alt={Vector} />
                </div>
                <div className="desc-categories">
                    <p>view all</p>
                </div>
            </div>
        </div>

        <div className="donation">
            <div className="donate">
                <img src={PhotoDonation} alt={PhotoDonation} />
                <h3>Donate for kids to their well being</h3>
                <div className="donate-button">
                    <div className="desc-donate">
                        <img src={iconDonate} alt={iconDonate} />
                        <p>Yussaeid Foundation</p>
                    </div>
                    <button className='btn-donate'><Link to={'/Details'}>Donate</Link></button>
                </div>
            </div>
        </div>

        <div className="foudation">
            <img src={foudation} alt={foudation} />
        </div>
    </div>
  )
}

export default InfoHome