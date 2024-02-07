import styled from "styled-components";
import "./App.css";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import { lazy, Suspense } from "react";
import Footer from "./components/sections/Footer";
const Home = lazy(() => import("./components/main-components/Home"));

function App() {
    return (
        <Container>
            <Header />
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
                <Footer />
            </Suspense>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
`;
