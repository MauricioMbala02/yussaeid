import CancelPayment from "../components/CancelPayment"
import FormPayment from '../components/FormPayment';
import mastercard from '../assets/mastercard.svg'
import '../components/Visa.css'

const MasterCard = () => {
  return (
    <div>
      <CancelPayment />
      <div className="desc-card">
        <img src={mastercard} alt={mastercard} className="mastercard" />
        <h2 className="card-mastercard">Credit card</h2>
        <p>We’ve sent the code to your email</p>
      </div>
      <FormPayment />
    </div>
  )
}

export default MasterCard