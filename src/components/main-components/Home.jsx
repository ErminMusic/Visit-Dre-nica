import { lazy, Suspense } from "react";
import styled from "styled-components";
const Hero= lazy(() => import("../sections/Hero"));
const HomeFetch = lazy(() => import("./HomeFetch"));

function Home() {
    return (
        <Container>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <HomeFetch />
            </Suspense>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    overflow: hidden;
`;
