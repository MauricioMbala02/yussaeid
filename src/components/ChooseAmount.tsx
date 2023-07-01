import { useState } from 'react'
import Donatenow from './Donatenow'
import './ChooseAmount.css'
import './ModalDonation.css'

const ChooseAmount = () => {
  const [gender, setGender]: any = useState();
  const [Modal, setModal] = useState(false);
  const [doneModal, setDoneModal] = useState(true)
  const [viewValue, setViewValue] = useState(0)

  const ConfirmeValue = (e:any) => {
    if(e >= 5) {
        setDoneModal(false)
        setViewValue(e)
    }else{
        setDoneModal(true)
        setViewValue(e)
    }
}

  const showPopUp = () => setModal(!Modal);
  
  return (
    <div>
        <h1 className='Amount'>Choose Amount</h1>
        <div className="chooseAmount">
            <input type="radio" name="valor" id="valor1" value={'mode'} onChange={e=>setGender(e.target.value)} />
            <input type="radio" name="valor" id="valor2" value={'mode1'} onChange={e=>setGender(e.target.value)}/>
            <input type="radio" name="valor" id="valor3" value={'mode2'} onChange={e=>setGender(e.target.value)} />
            <label htmlFor="valor1">
              <div className={`box ${gender} a`}>$50</div>
            </label>
            <label htmlFor="valor2">
              <div className={`box ${gender} b`}>$100</div>
            </label>
            <label htmlFor="valor3">
              <div className={`box ${gender} c`}>$500</div>
            </label>
        </div>

        <div className="separator">
            <div></div>
            <div>or</div>
            <div></div>
        </div>

        <div className="Politic">
            <button onClick={showPopUp}>Enter Price Manually</button>
        </div>

        {Modal && 
          <div className="modal-container">
          <div className="content-modal">
              {!doneModal && <h2>${`${viewValue}`}</h2>}
              <br />
              <input 
                type="number" 
                className='spin-button-none'
                placeholder='Value Donate' 
                onChange={e => ConfirmeValue(e.target.value)} 
              />
              <br />
              <div className="btns-donate">
                  <button className='cancel' onClick={showPopUp}>Cancel</button>
                  <button className='done' disabled={doneModal} onClick={showPopUp}>Ok</button>
              </div>
          </div>
      </div>
        }

        <Donatenow/>
    </div>
  )
}

export default ChooseAmount