import styled from "styled-components";
import heroImg from "../../images/heroImg.webp";
import arrowsrc from "../../images/arrow.png";
import heroImgLandscape from "../../images/hero2Img.webp";
export default function Hero(props) {
    return (
        <Container>
            <HeroTitle>
                <Text>¿Te gustaria trabajar como enfermero en Alemania?</Text>
            </HeroTitle>
            <ArrowDiv
                onClick={() => {
                    const offset = 0;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect =
                        props.bg1Ref.current.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                        top: offsetPosition,
                    });
                }}
            >
                <ArrowImg src={arrowsrc} alt="Arrow to go down the page" />
            </ArrowDiv>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
    margin-top: 90px;
    position: relative;
    @media (orientation: landscape) {
        background-image: url(${heroImgLandscape});
    }
`;
const HeroTitle = styled.div`
    width: 245px;
    height: 147px;
    background: #c4c4c4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    position: absolute;
    top: 20%;
    outline: none;
    align-self: center;
    @media (min-width: 600px) {
        width: 25vw;
        height: 12vw;
        left: 18%;
    }
`;

const Text = styled.p`
    margin: 0;
    padding: 0;
    color: #0e9382;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    z-index: 1;
    @media (min-width: 600px) {
        max-width: 20ch;
        font-size: 1.7vw;
    }
`;

const ArrowDiv = styled.div`
    position: absolute;
    background: #c4c4c4;
    mix-blend-mode: luminosity;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    width: 39px;
    height: 39px;
    bottom: 15%;
    cursor: pointer;
    transition: 50ms ease-in-out all;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    &:active {
        transform: scale(0.9);
    }
`;

const ArrowImg = styled.img`
    height: 23px;
    transform: rotateZ(180deg);
`;
