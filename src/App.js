import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Flyer from "./components/FlyerSection/Flyer";
import Section2 from "./components/Section2/Section2";
import Footer from "./components/Footer/Footer";
import { createGlobalStyle } from "styled-components";
import { useRef } from "react";

const Global = createGlobalStyle`
    *{
        font-family: 'Lexend Deca', sans-serif;
        box-sizing: border-box;
        
    }
    html,body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        min-width: 100vw;
        scroll-behavior: smooth;
        
    }
`;
function App() {
    const requisitosRef = useRef();
    const contactRef = useRef();
    const bg1Ref = useRef();
    return (
        <>
            <Global />
            <Navbar requisitosRef={requisitosRef} contactRef={contactRef} />
            <Hero bg1Ref={bg1Ref} />
            <Flyer requisitosRef={requisitosRef} bg1Ref={bg1Ref} />
            <Section2 contactRef={contactRef} />
            <Footer />
        </>
    );
}

export default App;
