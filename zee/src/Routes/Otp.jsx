import React, { useContext } from 'react'
import { PinInput, PinInputField,HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const Otp = () => {
    const navigate = useNavigate()
    const [pinNumber, setPinNumber] = useState()
    const {otp} = useContext(AppContext);
function handleOtp() {
// setPinNumber()
// console.log(otp)
if(pinNumber == otp) {
    alert("SignUp Successful");
    // <navigate to="/"/>
  navigate('/login') 
}else {
    alert("Wrong OTP")
}

// pinNumber == otp ? alert("SignUp Successful"): alert("Wrong OTP")


}


  return (
    <HStack>
  <PinInput onChange={(value) =>setPinNumber(value)}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>

  <input type="submit" value="Verify" onClick={handleOtp}/>
</HStack>
  )
}

export default Otp
