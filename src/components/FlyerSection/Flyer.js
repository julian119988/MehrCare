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
                <Text
                    style={{ position: "absolute", bottom: "10%", left: "5%" }}
                >
                    ¿Cuáles son los requisitos?
                </Text>
            </Background1>
            <Background2>
                <Container style={{ flexDirection: "row" }}>
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
                </Container>
                <List>
                    <Item>
                        Certificado nivel B2
                        <CertificadoDiv>
                            No es necesario saber alemán con anterioridad.Cuando
                            inicies la beca te brindaremos un cursopara que
                            aprendas alemán y puedas viajar.
                        </CertificadoDiv>
                    </Item>
                    <Item>
                        Contrato laboral
                        <ContratoDiv>
                            Necesitas un contrato laboral antes que
                            puedasviajar, la duracion mínima es de 2 años.
                            Tendrás entrevistas directamente con
                            clínicasalemanas.
                        </ContratoDiv>
                    </Item>
                    <Item>
                        Trámites de visado
                        <TramitesDiv>
                            Tendrás que obtener una visa para trabajar
                            allá.Nosotros te ayudaremos con los papeles yla
                            inserción laboral, así podrásobtener la visa
                            facilmente.
                        </TramitesDiv>
                    </Item>
                </List>
            </Background2>
            <Background3>
                <Container>
                    <Text>¿En que te ayuda MehrCare?</Text>
                    <P>
                        Nosotros financiamos todo el proyecto! Te brindamos los
                        cursos de aleman totalmente gratis y te ayudamos a
                        tramitar todos los papeles para que puedas viajar.
                    </P>
                </Container>
                <Container
                    style={{ alignItems: "flex-start", marginTop: "5%" }}
                >
                    <Text style={{ marginLeft: "5%" }}>¿A donde vas a ir?</Text>
                    <Carousel1
                        images={images}
                        style={{
                            height: "auto",
                            width: "70%",
                            margin: "5% auto 5% auto",
                        }}
                        zIndexAtMax={999}
                        shouldLazyLoad
                        isAutoPlaying
                        isLoop
                        hasIndexBoard={false}
                        objectFit
                    />
                </Container>
            </Background3>
        </Container>
    );
}
const List = styled.ul`
    color: white;
    padding-left: 7%;
    color: white;
    font-weight: normal;
    font-size: 18px;
`;
const Item = styled.li`
    margin: 15px 0 15px 0;
`;
const P = styled.p`
    font-weight: lighter;
    font-size: 13px;
    margin: 10px 10% 10px 10%;
    padding: 0;
    color: white;
`;
const CertificadoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    font-size: 13px;
    margin: 10px 0 10px 0;
`;
const TramitesDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    font-size: 13px;
    margin: 10px 0 10px 0;
`;
const ContratoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    font-size: 13px;
    margin: 10px 0 10px 0;
`;
const Image = styled.img`
    width: 80%;
    margin-top: 5%;
`;
const Text = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
    font-weight: normal;
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
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
`;
const Background3 = styled.div`
    width: 100%;
    height: auto;
    background-color: #5ac3b5;
    min-height: 100%;
`;

const Title = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
    font-weight: lighter;
    font-size: 18px;
    width: auto;
    text-align: center;
    min-height: 100%;
`;
