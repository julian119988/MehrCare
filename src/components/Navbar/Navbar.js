import mehrCareLogo from "../../images/mehrCareLogo.jpg";
import hamburgerMenu from "../../images/hamburgerMenu.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import cross from "../../images/cross.png";

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const menuVariants = {
        opened: {
            top: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
        closed: {
            top: "-100vh",
        },
    };
    const linkVariants = {
        opened: {
            opacity: 1,
            y: 50,
        },
        closed: {
            opacity: 0,
            y: 0,
        },
    };
    return (
        <Container>
            <Logo src={mehrCareLogo} alt="MehrCare logo" />
            <TitleDiv>
                <Title>Mehr</Title>
                <BoldTitle>Care</BoldTitle>
            </TitleDiv>
            <HamburgerMenu
                src={hamburgerMenu}
                alt="hambuger menu icon"
                onClick={() => setIsOpen(!isOpen)}
            />
            <NavBarList>
                <NavBarListItem
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    Home
                </NavBarListItem>
                <NavBarListItem
                    onClick={() => {
                        const offset = 200;
                        const bodyRect =
                            document.body.getBoundingClientRect().top;
                        const elementRect =
                            props.bg1WideRef.current.getBoundingClientRect()
                                .top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({
                            top: offsetPosition,
                        });
                    }}
                >
                    Requisitos
                </NavBarListItem>
                <NavBarListItem
                    onClick={() => {
                        const offset = 180;
                        const bodyRect =
                            document.body.getBoundingClientRect().top;
                        const elementRect =
                            props.contactRef.current.getBoundingClientRect()
                                .top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({
                            top: offsetPosition,
                        });
                    }}
                >
                    Contacto
                </NavBarListItem>
            </NavBarList>
            <Nav
                initial={false}
                variants={menuVariants}
                animate={isOpen ? "opened" : "closed"}
            >
                <Link
                    variants={linkVariants}
                    onClick={() => {
                        window.scrollTo(0, 0);
                        setIsOpen(!isOpen);
                    }}
                >
                    Home
                </Link>
                <Link
                    variants={linkVariants}
                    onClick={() => {
                        const offset = 130;
                        const bodyRect =
                            document.body.getBoundingClientRect().top;
                        const elementRect =
                            props.requisitosRef.current.getBoundingClientRect()
                                .top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({
                            top: offsetPosition,
                        });
                        setIsOpen(!isOpen);
                    }}
                >
                    Requisitos
                </Link>
                <Link
                    variants={linkVariants}
                    onClick={() => {
                        const offset = 130;
                        const bodyRect =
                            document.body.getBoundingClientRect().top;
                        const elementRect =
                            props.contactRef.current.getBoundingClientRect()
                                .top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({
                            top: offsetPosition,
                        });
                        setIsOpen(!isOpen);
                    }}
                >
                    Contacto
                </Link>
                <CloseNav
                    variants={linkVariants}
                    onClick={() => setIsOpen(!isOpen)}
                ></CloseNav>
            </Nav>
        </Container>
    );
}

const NavBarList = styled.ul`
    display: none;
    margin: 0;
    padding: 0;
    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
        margin-top: 6px;
        margin-left: auto;
        margin-right: 10px;
    }
`;
const NavBarListItem = styled.li`
    display: none;
    margin: 0;
    padding: 0;
    @media (min-width: 600px) {
        display: flex;
        margin-left: 2vw;
        margin-right: 2vw;
        font-size: 1.6vw;
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    }
`;
const Link = styled(motion.li)`
    color: white;
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    list-style: none;
    cursor: pointer;
`;

const CloseNav = styled(motion.div)`
    position: absolute;
    top: 8vh;
    right: 20vw;
    background-image: url(${cross});
    width: 30px;
    aspect-ratio: 1;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;
const Nav = styled(motion.nav)`
    background-color: #0e9382;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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
    height: 99px;
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
    @media (min-width: 600px) {
        display: none;
    }
`;
export default Navbar;
