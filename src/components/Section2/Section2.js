import styled from "styled-components";
import clinica1 from "../../images/clinicasLogos/clinica1.png";
import clinica2 from "../../images/clinicasLogos/clinica2.png";
import clinica3 from "../../images/clinicasLogos/clinica3.png";
import foto1 from "../../images/personal/foto1.jpg";
import foto2 from "../../images/personal/foto2.jpg";
import foto3 from "../../images/personal/foto3.jpg";
import CarouselPersonal from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export default function Section2(props) {
    const clinics = [clinica1, clinica2, clinica3];
    const personal = [foto2, foto1, foto3].map((foto) => ({
        src: foto,
    }));
    return (
        <Main>
            <Clinics>
                <Title>Clínicas con las que trabajamos</Title>
                <ClinicsImgGrid>
                    {clinics.map((clinic) => (
                        <CenterImg>
                            <ClinicsImg src={clinic} alt="Logo de clínica" />
                        </CenterImg>
                    ))}
                </ClinicsImgGrid>
            </Clinics>
            <QuienesSomos>
                <Title>¿Quiénes somos?</Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Nullam nulla ligula, efficitur in sapien
                    non.Pellentesque nisi purus, ornare eu pellentesque at.
                </P>
                <CarouselPersonal
                    images={personal}
                    style={{
                        height: "200px",
                        width: "70%",
                        margin: "5% auto 5% auto",
                    }}
                    zIndexAtMax={999}
                    shouldLazyLoad
                    isAutoPlaying
                    isLoop
                    hasIndexBoard={false}
                />
            </QuienesSomos>
            <MasInformacionDiv>
                <Title>Más información</Title>
                <P>
                    Para mas información rellena este formulario y nos pondremos
                    en contacto contigo
                </P>
                <FormDeContacto ref={props.contactRef}>
                    <ContactMeTitle>Contactános</ContactMeTitle>
                    <Input type="text" placeholder="Nombre" required />
                    <Input type="text" placeholder="Apellido" required />
                    <Input
                        type="email"
                        placeholder="Correo eléctronico"
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Número de teléfono"
                        required
                    />
                    <Input
                        type="submit"
                        value="Envíar"
                        style={{
                            background: "#5AC3B5",
                            borderRadius: "10px",
                            width: "50%",
                            color: "white",
                            marginLeft: "auto",
                            marginRight: "auto",
                            padding: "0",
                        }}
                    />
                </FormDeContacto>
            </MasInformacionDiv>
        </Main>
    );
}
const ContactMeTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    /* identical to box height */

    color: #ffffff;
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
`;

const MasInformacionDiv = styled.div``;
const QuienesSomos = styled.div`
    display: flex;
    flex-direction: column;
`;

const P = styled.p`
    font-weight: lighter;
    font-size: 13px;
    line-height: 16px;
    color: #0a9381;
    margin: 5% 10% 5% 10%;
`;

const ClinicsImg = styled.img`
    width: auto;
    height: auto;
    max-width: 150px;
    align-self: center;
    justify-self: center;
`;
const CenterImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-self: center;
    justify-self: center;
`;
const ClinicsImgGrid = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 150px));
    padding: 5% 5% 0 5%;
    max-width: 100%;
    justify-content: center;
    @media (min-width: 600px) {
        min-width: 600px;
        margin-left: auto;
        margin-right: auto;
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
`;
