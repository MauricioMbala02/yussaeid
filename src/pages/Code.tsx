import React, { FC, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import '../components/Code.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

let currentOTPIndex = 0
const Code: FC <Props> = (): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''))
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0)
  const [confirmeCode, setConfirmeCode] = useState(true)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = target
    const newOTP: string[] = [...otp]
    newOTP[currentOTPIndex] = value.substring(value.length - 1)

    if(!value) setActiveOTPIndex(currentOTPIndex - 1)
    else setActiveOTPIndex(currentOTPIndex + 1)

    setOtp(newOTP)
    if(currentOTPIndex === 3) {
      setConfirmeCode(false)
    }else{
      setConfirmeCode(true)
    }
  }

  const handleOnKeyDown = (
    {key}: React.KeyboardEvent<HTMLInputElement>, 
    index: number
    ) => {
      currentOTPIndex = index;
    if(key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex])

  return (
    <div>
      <div className="code-title">
        <h1>put your CODE</h1>
        <p>Put your Account code</p>
      </div>
      <div className="confirme-code">
        {otp.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <input 
                ref={index === activeOTPIndex ? inputRef : null}
                type="number" 
                className="spin-button-none"
                onChange={handleOnChange}
                onKeyDown={(e)=> handleOnKeyDown(e, index)}
                value={otp[index]}
                placeholder="*"
              />
              {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
              )}
            </React.Fragment>
          )
        })}
      </div>
      <div className="btns-confirme-code">
        <Link to={'/PayDone'}><button className="next" disabled={confirmeCode}>Next</button></Link><br />
        <Link to={'/Donation'}><button className="send">Cancel Donation</button></Link>
      </div>
    </div>
  )
}

export default Code