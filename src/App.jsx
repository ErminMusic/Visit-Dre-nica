import styled from "styled-components";
import "./App.css";
import Header from "./components/sections/Header";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/main-components/Home"));

function App() {
    return (
        <Container>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;
