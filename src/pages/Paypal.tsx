import CancelPayment from '../components/CancelPayment';
import FormPayment from '../components/FormPayment';
import paypal from '../assets/paypal.svg'
import '../components/Visa.css'

const Paypal = () => {
  return (
    <div>
      <CancelPayment />
      <div className="desc-card">
        <img src={paypal} alt={paypal} className='paypal' />
        <h2 className="card-mastercard">Credit card</h2>
        <p>We’ve sent the code to your email</p>
      </div>
      <FormPayment />
    </div>
  )
}

export default Paypal