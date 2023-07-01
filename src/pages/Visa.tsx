import CancelPayment from '../components/CancelPayment';
import FormPayment from '../components/FormPayment';
import visa from '../assets/visa.svg'
import '../components/Visa.css'

const Visa = () => {
  return (
    <div>
      <CancelPayment />
      <div className="desc-card">
        <img src={visa} alt={visa} className='visa' />
        <h2 className='card-visa'>Credit card</h2>
        <p>We’ve sent the code to your email</p>
      </div>
      <FormPayment />
    </div>
  )
}

export default Visa