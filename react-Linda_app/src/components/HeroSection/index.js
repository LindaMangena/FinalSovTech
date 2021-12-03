

import gatsbyIcon from "../../images/icon.png";



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
    // const [] = useState(false)

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
