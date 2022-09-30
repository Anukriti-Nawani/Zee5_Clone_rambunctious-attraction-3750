import React from "react";
import styles from "../Style/BuyPlan.module.css";
import Navbar from "../Components/Navbar";
import { Box, Checkbox, CheckboxGroup,Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
function BuyPLan() {
    return (
        <>
        {/* <Navbar /> */}

        <div className={styles.navigationbartop}>
 
    
    <div className={styles.grand}>
        <div className={styles.parent}>
            <div className={styles.container1}>

            <Text defaultChecked className={styles.watchAdd}>Watch Ad-Free with Premium!</Text>
            <Box className={styles.box}>
                <Text><CheckIcon className={styles.two}/>2800+ Blockbuster Movies</Text>
                <Text><CheckIcon className={styles.web}/>150+
                    Web Series</Text>
                <Text><CheckIcon className={styles.live}/>Live TV
                    Before TV</Text>
                <Text><CheckIcon className={styles.offer}/>Offer:
                    Extra 10% OFF on CC</Text>
                <Text><CheckIcon className={styles.checkIcon}/>Watch on Mobile,TV,Laptop</Text>
                <Text><CheckIcon className={styles.eduara}/>Eduaurra Competitive Exams</Text>
            </Box>
            </div>

            <div className={styles.container2}>
                <div className={styles.plan1}>
                    <div className={styles.dashed}>
                        <div className={styles.limit}>
                            <div className={styles.five}>
                                <h6 className={styles.limited}>LIMITED PERIOD OFFER</h6>
                            </div>
                            <div className={styles.save}>SAVE 50%</div>
                        </div>
                        <div className={styles.months12}>
                            <div className={styles.plan}>12 months plan</div>
                            <div className={styles.reduce}>
                                <div>
                                    <p className={styles.cross}> 999 </p>
                                </div>
                                <div>
                                    <h2 className={styles.text}>Rs.499</h2>
                                </div>

                            </div>
                        </div>

                        <div className={styles.check}>
                            <div>
                                <p className={styles.effect}>Effective price Rs.42/month</p>
                            </div>
                            <div>
                                <input type="checkbox" class="checkbox" className={styles.chek} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tv}>
                        <Text className={styles.screens}>Watch on 3 screens at the same time</Text>
                    </div>
                </div>
                <div className={styles.plan2}>
                    <div className={styles.months3}>
                        <div className={styles.months}>3 months plan</div>
                        <div className={styles.B9}>Rs.299
                            <div>
                                <input type="checkbox" class="checkbox" className={styles.chekk} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.watchTime}>Watch on 2 screens at the same time</div>
                </div>
                <form>
                    <div>
                        <input type="submit" value="Continue" className={styles.submit} />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>

    </>
    )
}
export default BuyPLan;