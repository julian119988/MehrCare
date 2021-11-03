import styled from "styled-components";
import Carousel1 from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import bannersrc from "../../images/MehrCareBanner.jpg";
import flyer2 from "../../images/MehrCareFlyer2.jpg";
import background1 from "../../images/background1.jpg";
import background2 from "../../images/bg2.png";
import clinica1 from "../../images/clinica1.jpg";
import clinica2 from "../../images/clinica2.jpg";
import clinica3 from "../../images/clinica3.jpg";
import tramite from "../../images/tramiteVisado.png";
import contrato from "../../images/contratoLaboral.png";
import certificado from "../../images/certificadoB2.png";

export default function Flyer() {
    const images = [clinica1, clinica2, clinica3].map((clinica) => ({
        src: clinica,
    }));
    return (
        <Container style={{ marginTop: "20px" }}>
            <Banner src={bannersrc} alt="MehrCare banner" />
            <Flyer2 src={flyer2} alt="MehrCare flyer" />
            <Background1>
                <Text>¿Cuáles son los requisitos?</Text>
            </Background1>
            <Background2>
                <Container>
                    <Title>Certificado nivel B2</Title>
                    <Image src={certificado} alt="B2 aleman exam" />
                </Container>
                <Container>
                    <Title>Contrato laboral</Title>
                    <Image
                        src={contrato}
                        alt="Contract"
                        style={{ marginRight: "20px" }}
                    />
                </Container>
                <Container>
                    <Title>Trámites de Visado</Title>
                    <Image src={tramite} alt="Tramites" />
                </Container>
            </Background2>
            <Background3></Background3>
            <Carousel1
                images={images}
                style={{ height: "auto", width: "100%" }}
                zIndexAtMax={999}
                shouldLazyLoad
                isAutoPlaying
                isLoop
                hasIndexBoard={false}
                objectFit
            />
        </Container>
    );
}
const Image = styled.img`
    width: 80%;
    margin-top: 5%;
`;
const Text = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
    font-weight: normal;
    position: absolute;
    bottom: 10%;
    left: 5%;
`;
const Background1 = styled.div`
    width: 100%;
    background-image: url(${background1});
    aspect-ratio: 4.0760869565217391304347826086957;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
`;
const Banner = styled.img`
    width: 100%;
`;
const Flyer2 = styled.img`
    width: 100%;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Background2 = styled.div`
    width: 100%;
    background-image: url(${background2});
    aspect-ratio: 0.67084078711985688729874776386404;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
`;
const Background3 = styled.div`
    width: 100%;
    aspect-ratio: 0.94936708860759493670886075949367;
    background-color: #5ac3b5;
`;

const Title = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
    font-weight: lighter;
    font-size: 18px;
    width: auto;
    text-align: center;
`;
