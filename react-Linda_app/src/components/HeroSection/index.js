import React, { useState } from 'react'; 
// import React from 'react' 
import { Button } from '../ButtonElements'
import gatsbyIcon from "../../images/icon.png";

import signin from '../Signin/Signin'

// import {Img}  
import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Img,
    HeroBg,

} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        
        <HeroContainer id="home">
            

            <HeroBg>
                <Img src={gatsbyIcon} ></Img>

            </HeroBg>


            <HeroContent>
                <HeroH1>Linda Mangena</HeroH1>
                <HeroP>Portofolio</HeroP>
                <HeroBtnWrapper>
                    
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
