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
            <P style={{ margin: "5px 0 10px 0" }}>¡Seguinos!</P>
            <SocialMediaIconsDiv>
                <Icons src={instagramIcon} alt="Instagram icon" />
                <Icons src={facebookIcon} alt="Facebook icon" />
                <Icons src={wppIcon} alt="Whatsapp icon" />
                <Icons
                    src={emailIcon}
                    style={{ width: "20px", height: "20px" }}
                    alt="Icon of an email"
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
`;
const MehrCareLogo = styled.img`
    max-width: 45%;
`;

const HrLindo = styled.div`
    width: 85%;
    height: 1px;
    background-color: #5ac3b5;
    margin: 10px 0 10px 0;
`;

const P = styled.p`
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #000000;
    margin: 0 3px 0 3px;
`;
const SocialMediaIconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 35%;
`;
const Icons = styled.img`
    aspect-ratio: 1;
    width: 24px;
`;

const CopyDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin: 10px 0 10px 0;
`;
