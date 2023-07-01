import './Visa.css'
import { Link } from 'react-router-dom';

const CancelPayment = () => {
  return (
    <div>
        <div className="cancel-Payment">
            <Link to={'/Donation'}><p className="cancel">Cancel</p></Link>
            <p className="missing">1/<span>2</span></p>
        </div>
    </div>
  )
}

export default CancelPayment