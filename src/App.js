import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Flyer from "./components/FlyerSection/Flyer";
import Section2 from "./components/Section2/Section2";
import { createGlobalStyle } from "styled-components";

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
    }
`;
function App() {
    return (
        <>
            <Global />
            <Navbar></Navbar>
            <Hero />
            <Flyer />
            <Section2 />
        </>
    );
}

export default App;
