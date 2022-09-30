import React from 'react'
import { Box } from "@chakra-ui/react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Slideshow from '../Components/SlideShow'
// import LatestMovies from '../Components/LatestMovies';
import LatestMovies from '../Components/lastesteTest';

const Home = () => {
  return (
    <Box my={7}>
   <Navbar />
   <Slideshow />
   {/* <LatestMovies /> */}
   <LatestMovies/>
   <Footer />
  

    </Box>
  )
}

export default Home
