import axios from "axios";
import React from "react";
import styles from "../Style/latestTest.module.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { Box, Text,HStack } from "@chakra-ui/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function LatestMovies() {
  const getData = () => {
    return axios.get(
      "https://json-server-mock-api-all.herokuapp.com/zeeLatest"
    );
  };
  const [data, getdatafromApi] = React.useState([]);

  React.useEffect(() => {
    getData().then((res) => getdatafromApi(res.data));
  }, []);
  console.log(data);

  return (
    <div className={styles.outer}>
      <Swiper className={styles.swiper}
        spaceBetween={0.5}
        slidesPerView={6}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide className={styles.movies} key={item.id}>
            <div className={styles.mainlatest}>
              <div >
                <img src={item.url} className={styles.image}/>
              </div>
              

              <div className={styles.share}>
                
              <Box className={styles.playIcon}>
                          <FaPlay className={styles.play}/>
                          <Text className={styles.watch}>Watch</Text>
              </Box>

              {/* share icon */}
              <Box className={styles.lookshare}>

              <FaShareAlt className={styles.faShare}/>
              <Text className={styles.look}>Share</Text>
             
              </Box>

              {/* title */}
              <Box className={styles.title}>
                      <HStack >

                         {(item.genre1 !== '') && <Text>{item.genre1}</Text>}
                         {(item.genre2 !== '') && <Text>{item.genre2}</Text>}
                   </HStack>
                   </Box>
              </div>
              

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LatestMovies;
