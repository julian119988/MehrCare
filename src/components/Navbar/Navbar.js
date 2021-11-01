import mehrCareLogo from "../../images/mehrCareLogo.jpg";
import hamburgerMenu from "../../images/hamburgerMenu.jpg";
import styled from "styled-components";
function Navbar() {
    return (
        <Container>
            <Logo src={mehrCareLogo} alt="MehrCare logo" />
            <TitleDiv>
                <Title>Mehr</Title>
                <BoldTitle>Care</BoldTitle>
            </TitleDiv>
            <HamburgerMenu src={hamburgerMenu} alt="hambuger menu icon" />
        </Container>
    );
}

const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
`;
const Title = styled.h3`
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
`;
const BoldTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
`;
const Logo = styled.img`
    width: 64px;
    height: 64px;
    margin-right: 15px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 120px;
    align-items: center;
    padding: 0 20px 0 20px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 99;
`;
const HamburgerMenu = styled.img`
    height: 29px;
    width: 55px;
    margin-left: auto;
    cursor: pointer;
    transition: 50ms ease-in-out all;
    &:active {
        transform: scale(0.9);
    }
    &:hover {
        opacity: 0.3;
    }
`;
export default Navbar;
