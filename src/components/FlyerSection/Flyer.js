import styled from "styled-components";
import Carousel1 from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import bannersrc from "../../images/MehrCareBanner.jpg";
import flyer2 from "../../images/MehrCareFlyer2.jpg";
import background1 from "../../images/background1.jpg";
import background2 from "../../images/bg2.png";
import clinica1 from "../../images/clinicas/1.webp";
import clinica2 from "../../images/clinicas/2.webp";
import clinica3 from "../../images/clinicas/3.webp";
import clinica4 from "../../images/clinicas/4.webp";
import clinica5 from "../../images/clinicas/5.webp";
import clinica6 from "../../images/clinicas/6.webp";
import clinica7 from "../../images/clinicas/7.webp";
import clinica8 from "../../images/clinicas/8.webp";
import clinica9 from "../../images/clinicas/9.webp";
import clinica10 from "../../images/clinicas/10.webp";
import clinica11 from "../../images/clinicas/11.webp";
import clinica12 from "../../images/clinicas/12.webp";
import clinica13 from "../../images/clinicas/13.webp";
import clinica14 from "../../images/clinicas/14.webp";
import clinica15 from "../../images/clinicas/15.webp";
import clinica16 from "../../images/clinicas/16.webp";
import tramite from "../../images/tramiteVisado.png";
import contrato from "../../images/contratoLaboral.png";
import certificado from "../../images/certificadoB2.png";
import mehrCareLogo from "../../images/MehrCareLogoYNombre.jpg";
import bg1 from "../../images/bgWide/bg1.png";
import bg2 from "../../images/bgWide/bg2.png";

export default function Flyer(props) {
  const images = [
    clinica1,
    clinica2,
    clinica3,
    clinica4,
    clinica5,
    clinica6,
    clinica7,
    clinica8,
    clinica9,
    clinica10,
    clinica11,
    clinica12,
    clinica13,
    clinica14,
    clinica15,
    clinica16,
  ].map((clinica) => ({
    src: clinica,
  }));
  return (
    <Container style={{ marginTop: "20px" }} ref={props.bg1Ref}>
      <WhoWeAre>
        <h2 style={{ color: "#0a9381", margin: "0 0 15px 0" }}>
          ¿Quienes somos?
        </h2>
        <p style={{ color: "#0a9381", margin: 0 }}>
          MehrCare es una compañia de recursos humanos dedicada a la
          recolocación de personal profesional para trabajar en el exterior.
        </p>
      </WhoWeAre>
      {/* <Flyer2 src={flyer2} alt="MehrCare flyer" /> */}
      {/* <WideDiv> */}
      {/* <WhiteDiv>
          <img src={mehrCareLogo} alt="MehrCare logo y nombre" />
          <TextDiv>
            <h4>Con MehrCare es Posible</h4>
            <p>
              Alemania necesita enfermeros! Sumate a la iniciativa y experimentá
              lo que es vivir y trabajar en el exterior
            </p>
          </TextDiv>
        </WhiteDiv> */}
      <BG1Wide>
        <h2>Volá. Conocé. Trabajá</h2>
        <h2>Nosotros te ayudamos</h2>
        <p style={{ marginTop: 15, minWidth: "fit-content" }}>
          Te ayudamos en el proceso de visado la inserción laboral y además de
          todo eso, nos hacemos cargo de tu aprendizaje en alemán
        </p>
      </BG1Wide>
      <Bg2Wide>
        <h2
          id="req"
          ref={props.requisitosRef}
          style={{ color: "white", marginTop: "40px", marginBottom: "0px" }}
        >
          ¿Cuáles son los requisitos?
        </h2>
        <List style={{ marginBottom: "25px" }}>
          <Item>Titulo de enfermería terciario o universitario</Item>
          <Item>Pasaporte en vigor</Item>
          <Item>Tener un titulo argentino o convalidado en argentina</Item>
          <Item>Tener preferiblemente entre 25- 35 años</Item>
          <Item>Disponibilidad horaria</Item>
        </List>
      </Bg2Wide>
      {/* </WideDiv> */}

      <Background3>
        <Container style={{ alignItems: "flex-start", marginTop: "40px" }}>
          <Text style={{ marginBottom: "15px" }}>
            ¿En que te ayuda MehrCare?
          </Text>
          <P>
            Nosotros financiamos todo el proyecto! Te brindamos los cursos de
            aleman totalmente gratis y te ayudamos a tramitar todos los papeles
            para que puedas viajar.
          </P>
        </Container>
        <Container
          style={{
            alignItems: "flex-start",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          <Text>¿A donde vas a ir?</Text>
          <Carousel1
            images={images}
            style={{
              aspectRatio: "1.5",
              width: "70%",
              margin: "5% auto 0px auto",
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
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  margin-bottom: 40px;
  padding-right: 30px;
  h2 {
    margin: 0;
    color: #0a9381;
  }
  p {
    margin: 0;
    color: #0a9381;
    /* max-width: 40ch; */
    margin-top: 3vw;
    margin-bottom: auto;
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
    font-size: 16px;
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
      font-size: 16px;
    }
  }
`;
const Bg2Wide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #93cd80;
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 30px;
  padding-right: 30px;
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
  padding-left: 30px;
  color: white;
  font-weight: normal;
  font-size: 18px;
  margin-top: 10px;
`;
const Item = styled.li`
  margin: 15px 0 15px 0;
  font-size: 16px;
`;
const P = styled.p`
  font-weight: lighter;
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: white;
  @media (min-width: 600px) {
    font-size: 16px;
    max-width: 65ch;
    /* margin-top: 3vw; */
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
    /* font-size: 3vw; */
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
const WhoWeAre = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
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
  padding-left: 30px;
  padding-right: 30px;
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
