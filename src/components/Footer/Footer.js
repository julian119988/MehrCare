import styled from "styled-components";
import wppIcon from "../../images/socialMediaIcons/whatsappIcon.png";
import emailIcon from "../../images/socialMediaIcons/emailIcon.png";
import instagramIcon from "../../images/socialMediaIcons/instagramIcon.png";
import facebookIcon from "../../images/socialMediaIcons/facebookIcon.png";
import mehrCareLogo from "../../images/MehrCareLogoYNombre.jpg";
export default function Footer() {
    return (
        <Main>
            <MehrCareLogo src={mehrCareLogo} alt="MehrCare logo and name" />
            <HrLindo></HrLindo>
            <P id="followUs">¡Seguinos!</P>
            <SocialMediaIconsDiv>
                <Icons
                    src={instagramIcon}
                    alt="Instagram icon"
                    onClick={() =>
                        (window.location.href =
                            "https://www.instagram.com/mehrcare_tenerife/?hl=es-la")
                    }
                />
                <Icons
                    src={facebookIcon}
                    alt="Facebook icon"
                    onClick={() =>
                        (window.location.href =
                            "https://www.facebook.com/Mehrcare-Enfermeros-en-Alemania-109384110918604/")
                    }
                />
                <Icons
                    src={wppIcon}
                    alt="Whatsapp icon"
                    onClick={() =>
                        (window.location.href =
                            "https://api.whatsapp.com/send?phone=5492646241441")
                    }
                />
                <Icons
                    src={emailIcon}
                    alt="Icon of an email"
                    id="bigger"
                    onClick={() =>
                        (window.location.href = "mailto:mail@domain.tld")
                    }
                />
            </SocialMediaIconsDiv>
            <CopyDiv>
                <P>
                    MehrCare<sup>©</sup>
                </P>
                <P>2021</P>
                <P>•</P>
                <P>all rights reserved</P>
            </CopyDiv>
        </Main>
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2vw;
    #followUs {
        margin: 5px 0 10px 0;
        @media (min-width: 600px) {
            margin: 1vw 0 1vw 0;
        }
    }
`;
const MehrCareLogo = styled.img`
    max-width: 45%;
    @media (min-width: 600px) {
        max-width: 300px;
    }
`;

const HrLindo = styled.div`
    width: 85%;
    height: 1px;
    background-color: #5ac3b5;
    margin: 10px 0 10px 0;
    @media (min-width: 600px) {
        height: 2px;
    }
`;

const P = styled.p`
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #000000;
    margin: 0 3px 0 3px;
    @media (min-width: 600px) {
        font-size: 1.3vw;
        margin: 0 1vw 0 1vw;
    }
`;
const SocialMediaIconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    margin-top: 1vw;
    margin-bottom: 1vw;
    #bigger {
        width: 20%;
        aspect-ratio: 1;
        max-width: 45px;
    }
`;
const Icons = styled.img`
    aspect-ratio: 1;
    width: 20%;
    cursor: pointer;
    max-width: 50px;
`;

const CopyDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin: 10px 0 10px 0;
`;
