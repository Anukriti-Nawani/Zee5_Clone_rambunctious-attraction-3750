import { Box, Button, Input, Text, VStack,Link } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Otp from "./Otp";

// function Signup() {
//    const navigate = useNavigate();
//    const { setData } = useContext(AppContext);
//    const [text, setText] = useState({ email: '', password: '' });

//    const handleSignup = () => {
//       setData({ email: text.email});
//       setText({ email: ''});
//       goToLogin();
//    }

//    const goToLogin = () => { navigate('/login') }

//    return (
      
//    );
// }

// export default Signup;


function Signup() {

    const navigate = useNavigate();
    const { setData,setOtp } = useContext(AppContext);
    const [text, setText] = useState({ email: ''});

   const handleSignup = () => {
      const val = Math.floor(1000 + Math.random() * 9000);
      alert ("Your One time Pin is"+"\n"+val);
      setData({ email: text.email});
      setText({ email: ''});
      setOtp(val)
      goToOtp();
   }

   const goToOtp = () => { navigate('/Otp') }

return (
        <>         
        {/* <Input autoFocus={true} value={text.email} onChange={(event) => setText({ ...text, email: event.target.value })} type='email' variant='flushed' borderColor='rgb(111, 111, 111)' focusBorderColor='rgb(176, 80, 255)' placeholder='E-mail' w='333px' />
        <p>forgot password</p>
          <Button  onClick={handleSignup} w='333px' h='47px' variant='outline' borderColor='rgb(111, 111, 111)' _hover="transparent" color='gray'>Sign up</Button>

       
       
        <p>forgot password</p> */}


        <Box mb={7} height="100%">
         <Text fontSize="xl" fontWeight="bold" lineHeight='3em'>Create a new account</Text>
         <Text lineHeight="1.2em" color='gray'>Create an account to continue enjoying <br /> uninterrupted video and personalised experience</Text>
         <VStack gap={7} mt={7} mb={4}>
            <Button className="sign" width='333px' color='white' fontWeight='bold' borderRadius={5} backgroundColor="black" marginRight = "2rem" >
               <FcGoogle className='google-icon' /> Sign in
            </Button>
            <Button bg='rgb(69, 9, 71)' _hover='rgb(69, 9, 71)' borderRadius={100} h='44px' w='44px' fontWeight='bold' pb={1} color="white">or</Button>
         </VStack>
         <VStack gap={3}>
         <Input value={text.email} onChange={(event) => setText({ ...text, email: event.target.value })} type='email' variant='flushed' borderColor='rgb(111, 111, 111)' color="black" focusBorderColor='rgb(176, 80, 255)' placeholder='E-mail' w='333px' />
            <Text fontSize='sm' color='gray'>
               By proceeding you agree to our <Link color="purple">Terms of Service</Link> & <br /><Link color="purple">Privacy Policy</Link>
            </Text>
            <Button  onClick={handleSignup} w='333px' h='47px' variant='outline' borderColor='rgb(111, 111, 111)' _hover="transparent" color='gray'>Send OTP</Button>
            <Text fontSize='sm' color='gray'>Already Registered? <Link color="purple">Login</Link></Text>
         </VStack>
      </Box>








        </>






    )
}
export default Signup;





