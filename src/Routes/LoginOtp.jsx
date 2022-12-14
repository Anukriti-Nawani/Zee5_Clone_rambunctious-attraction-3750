import React, { useContext } from "react";
import {
  PinInput,
  PinInputField,
  HStack,
  Box,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LoginOtp = () => {
  const navigate = useNavigate();
  const [pinNumber, setPinNumber] = useState();
  const { otp, setIsLogin } = useContext(AppContext);

  const toast = useToast();

  function handleOtp() {
    // setPinNumber()
    // console.log(otp)
    if (pinNumber == otp) {
      setIsLogin(true);

      toast({
        title: `Welcome`,
        description: "Login Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      navigate("/");
    } else {
      toast({
        title: `Wrong OTP`,
        status: "error",
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Navbar />

      <Box mb={7} height="100%" marginTop="2rem">
        <Text fontSize="xl" fontWeight="bold" lineHeight="3em" textAlign={"center"}>
          Create a new account
        </Text>
        <Text lineHeight="1.2em" color="gray" textAlign={"center"}>
          An OTP has been sent to the entered mobile
          <br /> number +91 46834 37839{" "}
          <Link className="Number">Change Number?</Link>
        </Text>

        <HStack className="pincode">
          <PinInput onChange={(value) => setPinNumber(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>

        </HStack>
        <Text fontSize="sm" color="gray" className="didNot" textAlign={"center"}>
          Did not get the OTP? <Link className="Resend">Resend</Link>
        </Text>

        <Button
          className="verify"
          onClick={handleOtp}
          w="333px"
          h="47px"
          variant="outline"
          borderColor="rgb(111, 111, 111)"
          display="block"
          margin="auto"
        >
          Verify
        </Button>
      </Box>
    </>
  );
};

export default LoginOtp;
