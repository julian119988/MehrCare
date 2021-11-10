import styled from "styled-components";
import Carousel1 from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import bannersrc from "../../images/MehrCareBanner.jpg";
import flyer2 from "../../images/MehrCareFlyer2.jpg";
import background1 from "../../images/background1.jpg";
import background2 from "../../images/bg2.png";
import clinica1 from "../../images/clinicas/clinica1.webp";
import clinica2 from "../../images/clinicas/clinica2.webp";
import clinica3 from "../../images/clinicas/clinica3.webp";
import tramite from "../../images/tramiteVisado.png";
import contrato from "../../images/contratoLaboral.png";
import certificado from "../../images/certificadoB2.png";
import mehrCareLogo from "../../images/MehrCareLogoYNombre.jpg";
import bg1 from "../../images/bgWide/bg1.png";
import bg2 from "../../images/bgWide/bg2.png";

export default function Flyer(props) {
    const images = [clinica1, clinica2, clinica3].map((clinica) => ({
        src: clinica,
    }));
    return (
        <Container style={{ marginTop: "20px" }} ref={props.bg1Ref}>
            <Banner src={bannersrc} alt="MehrCare banner" />
            <Flyer2 src={flyer2} alt="MehrCare flyer" />
            <WideDiv>
                <WhiteDiv>
                    <img src={mehrCareLogo} alt="MehrCare logo y nombre" />
                    <TextDiv>
                        <h4>Con MehrCare es Posible</h4>
                        <p>
                            Alemania necesita enfermeros! Sumate a la iniciativa
                            y experimentá lo que es vivir y trabajar en el
                            exterior
                        </p>
                    </TextDiv>
                </WhiteDiv>
                <BG1Wide>
                    <h2>Volá. Conocé. Trabajá</h2>
                    <h2>Nosotros Te Ayudamos</h2>
                    <p>
                        Te ayudamos en el proceso de visado la inserción laboral
                        y además de todo eso, nos hacemos cargo de tu
                        aprendizaje en alemán
                    </p>
                    <h2 id="req" ref={props.bg1WideRef}>
                        ¿Cuáles son los requisitos?
                    </h2>
                </BG1Wide>
                <Bg2Wide>
                    <DivItem>
                        <div>
                            <h2>Certificado nivel B2</h2>
                            <p>
                                No es necesario saber alemán con anterioridad.
                                Cuando inicies la beca te brindaremos un curso
                                para que aprendas alemán y puedas viajar.
                            </p>
                        </div>
                        <img src={certificado} alt="B2 aleman exam" />
                    </DivItem>
                    <DivItem>
                        <img
                            src={contrato}
                            alt="Contract"
                            style={{ marginRight: "20px" }}
                        />
                        <div>
                            <h2>Contrato laboral</h2>
                            <p>
                                Necesitas un contrato laboral antes que puedas
                                viajar, la duracion mínima es de 2 años. Tendrás
                                entrevistas directamente con clínicas alemanas.
                            </p>
                        </div>
                    </DivItem>
                    <DivItem>
                        <div>
                            <h2>Trámites de Visado</h2>
                            <p>
                                Tendrás que obtener una visa para trabajar allá.
                                Nosotros te ayudaremos con los papeles y la
                                inserción laboral, así podrás obtener la visa
                                facilmente.
                            </p>
                        </div>
                        <img src={tramite} alt="Tramites" />
                    </DivItem>
                </Bg2Wide>
            </WideDiv>
            <Background1>
                <Text
                    ref={props.requisitosRef}
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
                            No es necesario saber alemán con anterioridad.
                            Cuando inicies la beca te brindaremos un curso para
                            que aprendas alemán y puedas viajar.
                        </CertificadoDiv>
                    </Item>
                    <Item>
                        Contrato laboral
                        <ContratoDiv>
                            Necesitas un contrato laboral antes que puedas
                            viajar, la duracion mínima es de 2 años. Tendrás
                            entrevistas directamente con clínicas alemanas.
                        </ContratoDiv>
                    </Item>
                    <Item>
                        Trámites de visado
                        <TramitesDiv>
                            Tendrás que obtener una visa para trabajar allá.
                            Nosotros te ayudaremos con los papeles y la
                            inserción laboral, así podrás obtener la visa
                            facilmente.
                        </TramitesDiv>
                    </Item>
                </List>
            </Background2>
            <Background3>
                <Container
                    style={{ alignItems: "flex-start", marginTop: "5%" }}
                >
                    <Text style={{ marginLeft: "5%" }}>
                        ¿En que te ayuda MehrCare?
                    </Text>
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
                            aspectRatio: "1.5",
                            width: "70%",
                            margin: "5% auto 5% auto",
                            maxWidth: "800px",
                        }}
                        zIndexAtMax={999}
                        shouldLazyLoad
                        isAutoPlaying
                        isLoop
                        hasIndexBoard={false}
                    />
                </Container>
            </Background3>
        </Container>
    );
}
const BG1Wide = styled.div`
    background-image: url("${bg1}");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    aspect-ratio: 2.4489795918367346938775510204082;
    display: flex;
    flex-direction: column;
    padding: 7vw 5vw 4vw 5vw;
    h2 {
        align-self: center;
        margin: 0;
        color: white;
        font-size: 3vw;
    }
    p {
        align-self: center;
        text-align: center;
        margin: 0;
        color: white;
        max-width: 40ch;
        font-size: 1.7vw;
        margin-top: 3vw;
        margin-bottom: auto;
    }
    #req {
        align-self: flex-start;
    }
`;
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-end;
    p {
        max-width: 35ch;
        text-align: right;
        margin: 0;
        color: #0c9382;
        font-size: 1.7vw;
        margin-bottom: 8px;
    }
    h4 {
        max-width: 12ch;
        text-align: right;
        margin: 0;
        color: #0a9381;
        font-size: 1.8vw;
    }
`;

const DivItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5vw;
    justify-content: space-around;
    img {
        width: 25vw;
    }
    div {
        display: flex;
        flex-direction: column;
        h2 {
            margin: 0;
            margin-bottom: 2vw;
            color: white;
            font-size: 2.2vw;
        }
        p {
            margin: 0;
            max-width: 25ch;
            color: white;
            font-size: 1.7vw;
        }
    }
`;
const Bg2Wide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-image: url("${bg2}");
    background-size: cover;
    background-repeat: no-repeat;
`;

const WhiteDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5vw;
    padding-right: 6vw;
    align-items: flex-end;
    width: 100vw;
    margin-bottom: 3vh;
    img {
        width: 15vw;
        max-width: 400px;
        aspect-ratio: 1;
        min-width: 200px;
    }
`;
const WideDiv = styled.div`
    display: none;
    @media (min-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;
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
    @media (min-width: 600px) {
        font-size: 1.7vw;
        max-width: 65ch;
        margin-top: 3vw;
    }
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
    @media (min-width: 600px) {
        font-size: 3vw;
    }
`;
const Background1 = styled.div`
    width: 100%;
    background-image: url(${background1});
    aspect-ratio: 4.1;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    @media (min-width: 600px) {
        display: none;
    }
`;
const Banner = styled.img`
    width: 100%;
    @media (min-width: 600px) {
        display: none;
    }
`;
const Flyer2 = styled.img`
    width: 100%;
    @media (min-width: 600px) {
        display: none;
    }
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
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
    @media (min-width: 600px) {
        display: none;
    }
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
