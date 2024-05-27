import styled from "styled-components";
import { lazy, Suspense } from "react";
const FooterLinks = lazy(() => import("./FooterLinks"));
const Map = lazy(() => import("./Map"));

function Footer() {
    return (
        <Wrap>
            <Container>
                <Suspense fallback={<div>Loading...</div>}>
                    <FooterLinks />
                    <Map />
                </Suspense>
            </Container>
        </Wrap>
    );
}

export default Footer;

const Wrap = styled.div`
    width: 100%;
    background-color: #507d7f;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px 0 24px 0;
    color: #ffff;
`;
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 850px) {
        flex-direction: column;
    }
`;
