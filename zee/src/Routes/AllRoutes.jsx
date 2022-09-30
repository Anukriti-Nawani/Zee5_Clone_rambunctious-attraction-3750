

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Movies from "./Movies";
import Signup from "./Signup";
import TVShows from "./TVShows";
import SignUpOtp from "./SignupOtp";
import PrivateRoute from "../Components/PrivateRoute";
import LoginOtp from "./LoginOtp";
import BuyPLan from "./BuyPlan";

function AllRoutes() {
   return (
    
    
      <Routes>
         {/* <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
         <Route path="/" element={<Home /> }/>
         <Route path="/login" element={<Login />} />
         <Route path="/loginotp" element={<LoginOtp />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/signupotp" element={<SignUpOtp />} />
         <Route path="/tvShows" element={<TVShows />} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/buyplan" element={<BuyPLan />} />
      </Routes>
     
   );
}

export default AllRoutes;