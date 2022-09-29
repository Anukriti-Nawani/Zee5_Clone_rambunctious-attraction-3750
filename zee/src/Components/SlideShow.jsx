import axios from "axios";
import { useEffect, useState } from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import styles from "../Style/Slider.module.css";


function Slideshow() {
   const [data, setData] = useState([]);
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      axios.get(`https://json-server-mock-api-all.herokuapp.com/zeeSlide`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   const prevSlide = () => {
      setCurrent(current === 0 ? data.length - 1 : current - 1);
   }

   const nextSlide = () => {
      setCurrent(current === data.length - 1 ? 0 : current + 1);
   }

   useEffect(() => {
      setTimeout(() => {
         if (current === data.length - 1) setCurrent(0);
         else setCurrent(current + 1);
      }, 5000)
   }, [current, setCurrent, data]);

   return (
      <div className={styles.slider}>
         <IoIosArrowBack className="arrow left" onClick={prevSlide} />
         {
            data.map((item, index) => (
               (index === current) && (
                  <div key={index}>
                     <img src={item.url} alt={item.title} />
                     <button className={styles.sliderwatchbtn}>
                        <FaPlay /> WATCH
                     </button>
                     <button className={styles.sliderbuybtn}>
                        <FaCrown /> BUY PLAN
                     </button>
                     <span className={styles.slideritemtitle}>{item.title}</span>
                  </div>
               )
            ))
         }
         <IoIosArrowForward className="arrow right" onClick={nextSlide} />
      </div>
   );
}

export default Slideshow;