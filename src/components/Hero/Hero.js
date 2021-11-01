import styled from "styled-components";
import heroImg from "../../images/heroImg.png";

export default function Hero() {
    return (
        <Container>
            <HeroTitle>Te gusta</HeroTitle>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${heroImg});
    height: 70vh;
    margin-top: 120px;
`;
const HeroTitle = styled.div`
    width: 245px;
    height: 147px;

    background: #c4c4c4;
    mix-blend-mode: luminosity;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
