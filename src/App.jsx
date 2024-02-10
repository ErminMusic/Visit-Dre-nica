import styled from "styled-components";
import "./App.css";
import Header from "./components/sections/Header";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("./components/sections/Footer"));
import Home from "./components/main-components/Home";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

function App() {
    return (
        <Container>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Navigate to="/Home" />} />
                    <Route path="/Home" element={<Home />} />
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
