import { useState } from 'react';
import { Link } from 'react-router-dom';
import visa from '../assets/visa.svg'
import mastercard from '../assets/mastercard.svg'
import paypal from '../assets/paypal.svg'
import Shadow from './Shadow';
import './Donatenow.css'

const Donatenow = () => {
  const [popUp, setPopUp] = useState(false);
  const [gender, setGender]:any = useState('Donation');

  

  const showPopUp = () => setPopUp(!popUp);

  return (
    <div>
        <div className="Donatenow">
          <button onClick={showPopUp}>Donate now</button>
        </div>
        
        {popUp &&
          <>
          <Shadow />
          <div className="popUp">
          <div className="title-Payment">
            <h2>New payment method</h2>
            <p>Enter your email to recover</p>
          </div>

          <div className="method-Payment">
            <div className="custom-radio">
              <input type="radio" name="Payment" id="Payment-1" value={'Visa'} onChange={e=>setGender(e.target.value)} />
              <label htmlFor="Payment-1">
                <img src={visa} alt="" />
                <span>Visa</span>
              </label>
            </div>

            <div className="custom-radio">
              <input type="radio" name="Payment" id="Payment-2" value={'MasterCard'} onChange={e=>setGender(e.target.value)} />
              <label htmlFor="Payment-2">
                <img src={mastercard} alt="" />
                <span>MasterCard</span>
              </label>
            </div>

            <div className="custom-radio">
              <input type="radio" name="Payment" id="Payment-3" value={'PayPal'} onChange={e=>setGender(e.target.value)} />
              <label htmlFor="Payment-3">
                <img src={paypal} alt="" />
                <span>Paypal</span>
              </label>
            </div>
          </div>

          <div className="btns-Payment">
            <button className='cancel' onClick={showPopUp}>Cancel</button>
            <Link to={`/${gender}`}><button className='done'>Done</button></Link>
          </div>
        </div>
          </>
        }
    </div>
  )
}

export default Donatenow