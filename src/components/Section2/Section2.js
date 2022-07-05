import styled from "styled-components";
import clinica1 from "../../images/clinicasLogos/clinica1.png";
import clinica2 from "../../images/clinicasLogos/clinica2.png";
import clinica3 from "../../images/clinicasLogos/clinica3.png";
import personal1 from "../../images/personal/personal1.jpeg";
import personal2 from "../../images/personal/personal2.jpeg";
import personal3 from "../../images/personal/personal3.jpeg";
import personal4 from "../../images/personal/personal4.jpeg";

import CarouselPersonal from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export default function Section2(props) {
  const clinics = [clinica1, clinica2, clinica3];
  const personal = [
    { src: personal1, text: "Coordinador general de recursos humanos." },
    {
      src: personal2,
      text: "Colaboladora de recursos humanos involucrada en la selección de personal en Argentina.",
    },
    {
      src: personal3,
      text: "Colabolador de recursos humanos involucrada en la selección de personal en Argentina.",
    },
    {
      src: personal4,
      text: "Licenciada en psicología, número de mátricula MP 56079 egresada de la UNLP.",
      text2: "Colaboradora de recursos humanos.",
    },
  ].map(({ src, text, text2 }) => ({ src, text, text2 }));
  return (
    <Main>
      <Clinics>
        <Title>Clínicas y residencias con las que trabajamos</Title>
        <ClinicsImgGrid>
          {clinics.map((clinic) => (
            <CenterImg>
              <ClinicsImg src={clinic} alt="Logo de clínica" />
            </CenterImg>
          ))}
        </ClinicsImgGrid>
      </Clinics>
      <QuienesSomos>
        <Title>Conócenos ...</Title>
        {/* <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam nulla
          ligula, efficitur in sapien non.Pellentesque nisi purus, ornare eu
          pellentesque at.
        </P>
        <CarouselPersonal
          images={personal}
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
        /> */}
        <ConocenosDiv>
          <Container style={{ maxWidth: 300 }}>
            <img src={personal1} style={{ aspectRatio: "1", width: "300px" }} />
            <P style={{ display: "flex" }}>
              Coordinador general de recursos humanos.
            </P>
          </Container>
          <Container style={{ maxWidth: 300 }}>
            <img src={personal2} style={{ aspectRatio: "1", width: "300px" }} />
            <P style={{ display: "flex" }}>
              Colaboladora de recursos humanos involucrada en la selección de
              personal en Argentina.
            </P>
          </Container>
          <Container style={{ maxWidth: 300 }}>
            <img src={personal3} style={{ aspectRatio: "1", width: "300px" }} />
            <P style={{ display: "flex" }}>
              Colabolador de recursos humanos involucrada en la selección de
              personal en Argentina.
            </P>
          </Container>
          <Container style={{ maxWidth: 300 }}>
            <img src={personal4} style={{ aspectRatio: "1", width: "300px" }} />
            <P style={{ display: "flex" }}>
              Licenciada en psicología, número de mátricula MP 56079 egresada de
              la UNLP. <br />
              Colaboradora de recursos humanos.
            </P>
          </Container>
        </ConocenosDiv>
      </QuienesSomos>
      <MasInformacionDiv ref={props.contactRef}>
        <Container>
          <Title>Más información</Title>
          <P>
            Para mas información
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhQkxHO_zkVUXGqt3D6aJgWYEp3Um3-I70sXncX1L1crfqmw/viewform?usp=sf_link"
              target="_blank"
              style={{ marginLeft: "6px" }}
            >
              rellena este formulario
            </a>{" "}
            y nos pondremos en contacto contigo
          </P>
        </Container>
        {/* <FormDeContacto ref={props.contactRef}>
          <ContactMeTitle>Contactános</ContactMeTitle>
          <Input type="text" placeholder="Nombre" required />
          <Input type="text" placeholder="Apellido" required />
          <Input type="email" placeholder="Correo eléctronico" required />
          <Input type="text" placeholder="Número de teléfono" required />
          <Input type="submit" value="Envíar" id="send" />
        </FormDeContacto> */}
      </MasInformacionDiv>
    </Main>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* @media (min-width: 600px) {
    max-width: 50%;
  } */
`;
const ContactMeTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  @media (min-width: 600px) {
    font-size: 2vw;
  }
`;
const Input = styled.input`
  background: #ffffff;
  outline: none;
  border: none;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 31px;
  padding-left: 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #0a9381;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 600px) {
    margin-top: 1vw;
    margin-bottom: 1vw;
    height: 3vw;
    font-size: 1.5vw;
  }
`;

const FormDeContacto = styled.form`
  background: #93cd80;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 85%;
  margin: 7% auto 5% auto;
  display: flex;
  flex-direction: column;
  padding: 5%;
  @media (min-width: 600px) {
    max-width: 600px;
  }
  #send {
    background: #5ac3b5;
    border-radius: 10px;
    width: 50%;
    color: white;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    font-weight: 500;
    @media (min-width: 600px) {
      font-size: 1.5vw;
      font-weight: 500;
      margin-top: 2vw;
      margin-bottom: 0;
    }
  }
`;

const MasInformacionDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
    padding: 0 5vw 0 5vw;
  }
`;
const QuienesSomos = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-weight: lighter;
  font-size: 16px;
  color: #0a9381;
  margin: 5% 10% 5% 10%;
  min-width: 250px;
  align-self: center;
  @media (min-width: 600px) {
    max-width: 65ch;
    margin-top: 3vw;
  }
`;

const ClinicsImg = styled.img`
  width: auto;
  height: auto;
  min-width: 150px;
  max-width: 300px;
  align-self: center;
  justify-self: center;
`;
const CenterImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  max-width: 50%;
`;
const ClinicsImgGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 500px));
  padding: 5% 5% 0 5%;
  max-width: 100%;
  justify-content: center;
  @media (min-width: 600px) {
    min-width: 600px;
  }
`;
const Clinics = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #0a9381;
  margin: 10% 10% 0 5%;
  @media (min-width: 600px) {
    /* font-size: 3vw; */
  }
`;

const ConocenosDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 700px) {
    min-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;
