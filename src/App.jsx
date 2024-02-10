import styled from "styled-components";
import "./App.css";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("./components/sections/Footer"));
import Home from "./components/main-components/Home";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";

function App() {
    return (
        <Container>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                </Routes>

                <Suspense fallback={<div>Loading...</div>}>
                    <Footer />
                </Suspense>
            </Router>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
`;
