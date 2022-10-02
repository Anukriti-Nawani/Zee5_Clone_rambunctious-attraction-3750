import React, { useContext } from 'react'
import { PinInput, PinInputField,HStack, Box, Text, Button,useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { IoIosLogIn } from 'react-icons/io'

const LoginOtp = () => {
    const navigate = useNavigate()
    const [pinNumber, setPinNumber] = useState()
    const {otp,setIsLogin} = useContext(AppContext);

    const toast = useToast()
    

    
function handleOtp() {


// setPinNumber()
// console.log(otp)
if(pinNumber == otp) {
  setIsLogin(true)
  
    toast({
      title: `Welcome`,
      description: "Login Successful",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })



  navigate('/') 
}else {
    // alert("Wrong OTP")

    toast({
      title: `Wrong OTP`,
      status: "error",
      isClosable: true,
    })
}

// pinNumber == otp ? alert("SignUp Successful"): alert("Wrong OTP")


}


  return (
<>
    <Navbar />

    <Box mb={7} height="100%" marginTop="2rem">
    <Text fontSize="xl" fontWeight="bold" lineHeight='3em'>Create a new account</Text>
    <Text lineHeight="1.2em" color='gray'>An OTP has been sent to the entered mobile<br /> number +91 46834 37839 <Link className='Number'>Change Number?</Link></Text>
   
    {/* <VStack gap={3}> */}
    <HStack className = "pincode">
  <PinInput onChange={(value) =>setPinNumber(value)} >
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>

  {/* <input type="submit" value="Verify" onClick={handleOtp}/> */}
</HStack>
       <Text fontSize='sm' color='gray' className='didNot'>Did not get the OTP? <Link className="Resend">Resend</Link></Text>
 
       <Button className='verify' onClick={handleOtp} w='333px' h='47px' variant='outline' borderColor='rgb(111, 111, 111)'>Verify</Button>
   
 



 
</Box>
</>
  )
}

export default LoginOtp;
