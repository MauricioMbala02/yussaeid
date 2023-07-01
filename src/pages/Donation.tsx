import ChooseAmount from '../components/ChooseAmount'
import unsplash from '../assets/unsplash_GVg-x4MiriM (2).png'
import iconYussaeid from '../assets/Vector (3).svg'
import '../components/Donation.css'

const Donation = () => {
  return (
    <div>
      <div className="headerDonation">
        <img src={unsplash} alt={unsplash} className='Photo1' />
        <h1>Donate for kids to their well being</h1>
        <div className="subTitle">
          <img src={iconYussaeid} alt={iconYussaeid} />
          <h2>Yussaeid Foundation</h2>
        </div>
      </div>
      <ChooseAmount />
    </div>
  )
}

export default Donation