import { useState } from "react"
import { Link } from 'react-router-dom';

const FormPayment = () => {
    const [state, SetState] = useState(true)

    const handleChang = (e:any) => {
        if(e.length > 0) {
            verification(10)
        }else{
            SetState(true)
        }
    }

    const verification = (c:any) => {
        if(c.length >= 21) {
            SetState(false)
        }else{
            SetState(true)
        }
    }

  return (
    <div>
        <form className="formPayment">
            <br />
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                onChange={e => handleChang(e.target.value)} 
            /><br />
            <input 
                type="number" 
                name="cardNumer"
                className="spin-button-none" 
                placeholder="Enter your card number" 
                onChange={c => verification(c.target.value)} 
            /><br />
           <Link to={'/Code'}><button disabled={state}>Next</button></Link>
        </form>
    </div>
  )
}

export default FormPayment