

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Movies from "./Movies";
import Signup from "./Signup";
import TVShows from "./TVShows";
import Otp from "./Otp";
import PrivateRoute from "../Components/PrivateRoute";
import Navbar from "../Components/Navbar";

function AllRoutes() {
   return (
    
    
      <Routes>
         <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
         {/* <Route path="/" element={<Home /> }/> */}
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/otp" element={<Otp />} />
         <Route path="/tvShows" element={<TVShows />} />
         <Route path="/movies" element={<Movies />} />
      </Routes>
     
   );
}

export default AllRoutes;